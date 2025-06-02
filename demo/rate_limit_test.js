import 'dotenv/config';
import chalk from 'chalk';
import { MexcClient } from './MexcClient.js';
import ora from 'ora';
import Table from 'cli-table3';
import { performance } from 'perf_hooks';

const TEST_CONFIG = {
  testDuration: 60 * 1000,
  maxRequests: 200,
  cooldownAfterFail: 2000,
  orderDelay: 100,
};

async function testRateLimits() {
  console.log(chalk.bold.blue('\nMEXC Futures API Rate Limit Tester\n'));
  console.log(chalk.gray(`Starting test for ${TEST_CONFIG.testDuration / 1000} seconds...\n`));

  const client = new MexcClient({
    apiKey: process.env.API_KEY,
    isTestnet: true,
  });

  const stats = {
    totalRequests: 0,
    successfulOrders: 0,
    failedOrders: 0,
    rateLimitHits: 0,
    latencies: [],
    startTime: performance.now(),
    endTime: 0,
    lastError: null,
    lastResponse: null,
  };

  const spinner = ora({ text: 'Preparing test...', color: 'yellow' }).start();

  try {
    const balanceResponse = await client.getAsset({ currency: 'USDT' });
    if (!balanceResponse?.success) throw new Error(balanceResponse?.message || 'Failed to fetch balance');
    spinner.succeed(chalk.green('API is available. Starting test.'));
  } catch (e) {
    spinner.fail(chalk.red('Failed to connect to API'));
    console.error(e);
    process.exit(1);
  }

  console.log(chalk.gray('\n┌──────────────────────────────────────────────┐'));
  console.log(chalk.gray('│') + chalk.bold('              TEST CONFIGURATION              ') + chalk.gray('│'));
  console.log(chalk.gray('├──────────────────────────────────────────────┤'));
  console.log(chalk.gray('│') + ` Max requests: ${chalk.cyan(TEST_CONFIG.maxRequests)}                            ` + chalk.gray('│'));
  console.log(chalk.gray('│') + ` Duration: ${chalk.cyan(TEST_CONFIG.testDuration / 1000 + 's')}                                ` + chalk.gray('│'));
  console.log(chalk.gray('└──────────────────────────────────────────────┘\n'));

  const testSpinner = ora({ text: 'Testing rate limits...', color: 'cyan' }).start();

  const testInterval = setInterval(async () => {
    if (performance.now() - stats.startTime >= TEST_CONFIG.testDuration || stats.totalRequests >= TEST_CONFIG.maxRequests) {
      clearInterval(testInterval);
      stats.endTime = performance.now();
      testSpinner.stop();
      await showResults(stats);
      return;
    }

    stats.totalRequests++;
    const startTime = performance.now();

    try {
      const side = stats.totalRequests % 2 === 0 ? 1 : 3;
      const volume = +(Math.random() * (100 - 15) + 15).toFixed(0);

      const response = await client.createOrder({
        symbol: 'BTC_USDT',
        type: 5,
        side,
        openType: 2,
        vol: volume,
        leverage: 25,
      });

      if (!response?.success || !response?.data?.orderId) {
        stats.lastResponse = response;
        throw new Error(response?.message || 'Order creation failed');
      }

      stats.successfulOrders++;
      const latency = performance.now() - startTime;
      stats.latencies.push(latency);

      testSpinner.text = [
        `Requests: ${chalk.cyan(stats.totalRequests)}`,
        `Success: ${chalk.green(stats.successfulOrders)}`,
        `Errors: ${stats.failedOrders > 0 ? chalk.red(stats.failedOrders) : chalk.gray(stats.failedOrders)}`,
        `RateLimit: ${stats.rateLimitHits > 0 ? chalk.red(stats.rateLimitHits) : chalk.gray(stats.rateLimitHits)}`,
        `Avg Latency: ${chalk.yellow(calculateAverageLatency(stats.latencies).toFixed(0))}ms`
      ].join(' | ');

    } catch (error) {
      stats.failedOrders++;
      stats.lastError = error.message;

      if (error.message.toLowerCase().includes('rate limit') ||
        error.message.toLowerCase().includes('too many requests') ||
        stats.lastResponse?.code === 429) {
        stats.rateLimitHits++;
        await new Promise(resolve => setTimeout(resolve, TEST_CONFIG.cooldownAfterFail));
      }

      testSpinner.text = [
        `Requests: ${chalk.cyan(stats.totalRequests)}`,
        `Success: ${chalk.green(stats.successfulOrders)}`,
        `Errors: ${chalk.red(stats.failedOrders)}`,
        `RateLimit: ${chalk.red(stats.rateLimitHits)}`,
        `Last Error: ${chalk.red(error.message.split('\n')[0])}`
      ].join(' | ');
    }
  }, TEST_CONFIG.orderDelay);

  setTimeout(() => {
    clearInterval(testInterval);
    stats.endTime = performance.now();
    testSpinner.stop();
    showResults(stats);
  }, TEST_CONFIG.testDuration);
}

function calculateAverageLatency(latencies) {
  if (latencies.length === 0) return 0;
  return latencies.reduce((sum, lat) => sum + lat, 0) / latencies.length;
}

async function showResults(stats) {
  const actualDuration = (stats.endTime - stats.startTime) / 1000;
  const ordersPerMinute = (stats.successfulOrders / actualDuration) * 60;
  const successRate = (stats.successfulOrders / stats.totalRequests) * 100;

  const table = new Table({
    head: [chalk.bold.cyan('Metric'), chalk.bold.cyan('Value')],
    colWidths: [30, 30],
    style: { head: ['blue'], border: ['gray'] },
  });

  table.push(
    ['Test duration', `${actualDuration.toFixed(2)} s`],
    ['Total requests', stats.totalRequests],
    ['Successful orders', chalk.green(stats.successfulOrders)],
    ['Failed orders', stats.failedOrders > 0 ? chalk.red(stats.failedOrders) : chalk.gray(stats.failedOrders)],
    ['Rate limit hits', stats.rateLimitHits > 0 ? chalk.red(stats.rateLimitHits) : chalk.gray(stats.rateLimitHits)],
    ['Orders per minute', chalk.bold.green(ordersPerMinute.toFixed(1))],
    ['Success rate', `${successRate.toFixed(1)}%`],
    ['Average latency', `${calculateAverageLatency(stats.latencies).toFixed(0)}ms`],
    ['Max latency', stats.latencies.length > 0 ? `${Math.max(...stats.latencies).toFixed(0)}ms` : 'N/A'],
    ['Last error', stats.lastError ? chalk.red(stats.lastError.substring(0, 50)) : 'N/A']
  );

  console.log('\n' + table.toString() + '\n');

  if (stats.lastResponse) {
    console.log(chalk.gray('Last API response:'));
    console.dir(stats.lastResponse, { depth: null, colors: true });
    console.log();
  }

  console.log(chalk.gray('\nTest completed.\n'));
}

testRateLimits().catch(console.error);
