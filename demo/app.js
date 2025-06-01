import 'dotenv/config';
import chalk from 'chalk';
import { MexcClient } from '../src/nodejs/MexcClient.js';
import ora from 'ora';
import figlet from 'figlet';
import gradient from 'gradient-string';

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showBanner() {
  console.clear();
  console.log('\n');

  figlet.text(`MEXC Futures API Bypass`, {
    font: 'Small',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }, (err, data) => {
    if (err) return;
    console.log(gradient.pastel.multiline(data));
  });

  await sleep(100);
  console.log(chalk.blueBright('  MEXC Futures API Bypass Demo'));
  console.log(chalk.cyanBright(`  Author: @aptyp4uk1337 ${chalk.gray('|')} ${new Date().toLocaleString()}\n`));
}

async function main() {
  try {
    await showBanner();

    const spinner = ora({
      text: chalk.yellow('Initializing MEXC Client...'),
      color: 'yellow'
    }).start();

    const client = new MexcClient({
      apiKey: process.env.API_KEY,
      isTestnet: true,
    });

    await sleep(1000);
    spinner.succeed(chalk.green('MEXC Client initialized successfully\n'));

    // --- Step 1: Get account info ---
    const balanceSpinner = ora(chalk.yellow('Fetching account balance...')).start();
    const balance = await client.getAsset({ currency: 'USDT' });
    balanceSpinner.succeed(chalk.green('Balance data received\n'));

    console.log(chalk.gray('┌──────────────────────────────────────────────┐'));
    console.log(chalk.gray('│') + chalk.bold('           ACCOUNT SUMMARY           ') + chalk.gray('│'));
    console.log(chalk.gray('├──────────────────────────────────────────────┤'));
    console.log(chalk.gray('│') + ` 💰 Available: ${chalk.greenBright(`${balance.data.availableBalance.toFixed(2)} USDT`)}${' '.repeat(12)}` + chalk.gray('│'));
    console.log(chalk.gray('│') + ` 📊 Unrealized PnL: ${balance.data.unrealized >= 0 ? chalk.greenBright(`${balance.data.unrealized.toFixed(2)}`) : chalk.redBright(`${balance.data.unrealized.toFixed(2)}`)} USDT` + ' '.repeat(5) + chalk.gray('│'));
    console.log(chalk.gray('└──────────────────────────────────────────────┘\n'));

    // --- Step 2: Open positions ---
    const openOrders = [
      { symbol: 'BTC_USDT', side: 1, vol: 15, leverage: 25, emoji: '₿' },
      { symbol: 'ETH_USDT', side: 3, vol: 1, leverage: 10, emoji: 'Ξ' },
      { symbol: 'XRP_USDT', side: 1, vol: 100, leverage: 5, emoji: '✕' },
      { symbol: 'BTC_USDT', side: 3, vol: 50, leverage: 5, stopLossPrice: 112000, takeProfitPrice: 110000, emoji: '₿' },
      { symbol: 'ETH_USDT', side: 3, vol: 5, leverage: 10, stopLossPrice: 3000, takeProfitPrice: 2400, emoji: 'Ξ' },
    ];

    const openedOrderIds = [];

    console.log(chalk.blue.bold('🛫 OPENING POSITIONS'));
    console.log(chalk.gray('──────────────────────────────────────────────\n'));

    for (const order of openOrders) {
      const orderSpinner = ora({
        text: `${order.emoji}  Processing ${order.symbol} ${order.side === 1 ? 'LONG' : 'SHORT'}...`,
        color: 'cyan'
      }).start();

      const params = {
        symbol: order.symbol,
        type: 5,
        side: order.side,
        openType: 2,
        vol: order.vol,
        leverage: order.leverage,
        ...(order.stopLossPrice && { stopLossPrice: order.stopLossPrice }),
        ...(order.takeProfitPrice && { takeProfitPrice: order.takeProfitPrice }),
      };

      const response = await client.createOrder(params);
      const orderId = response?.data?.orderId;
      if (orderId) openedOrderIds.push(orderId);

      await sleep(300);

      const direction = order.side === 1 ?
        chalk.bgGreen.white(' LONG ') :
        chalk.bgRed.white(' SHORT ');

      orderSpinner.succeed([
        `${direction} ${order.emoji} ${chalk.bold(order.symbol)}`,
        `Leverage: ${chalk.yellow(order.leverage + 'x')}`,
        `Volume: ${chalk.yellow(order.vol)}`,
        order.stopLossPrice ? `SL: ${chalk.red(order.stopLossPrice)}` : '',
        order.takeProfitPrice ? `TP: ${chalk.green(order.takeProfitPrice)}` : '',
        chalk.gray(`ID: ${orderId}`)
      ].filter(Boolean).join(' | '));

      await sleep(500);
    }

    // --- Step 3: Cancel some orders ---
    console.log(`\n${chalk.magenta.bold('🛑 CANCELLING ORDERS')}`);
    console.log(chalk.gray('──────────────────────────────────────────────\n'));

    const idsToCancel = openedOrderIds.slice(0, 2);

    if (idsToCancel.length > 0) {
      const cancelSpinner = ora({
        text: `Cancelling ${idsToCancel.length} orders...`,
        color: 'magenta'
      }).start();

      await client.cancelOrders({ ids: idsToCancel });
      await sleep(800);

      cancelSpinner.succeed([
        chalk.gray('Cancelled orders:'),
        chalk.yellow(idsToCancel.join(', '))
      ].join(' '));
    } else {
      console.log(chalk.yellow('⚠️ No orders available for cancellation'));
    }

    // --- Step 4: Close positions ---
    const closingOrders = [
      { symbol: 'BTC_USDT', side: 4, vol: 15, leverage: 25, emoji: '₿' },
      { symbol: 'ETH_USDT', side: 2, vol: 1, leverage: 10, emoji: 'Ξ' },
    ];

    console.log(`\n${chalk.blue.bold('🛬 CLOSING POSITIONS')}`);
    console.log(chalk.gray('──────────────────────────────────────────────\n'));

    for (const order of closingOrders) {
      const closeSpinner = ora({
        text: `${order.emoji}  Closing ${order.symbol} position...`,
        color: 'blue'
      }).start();

      const params = {
        symbol: order.symbol,
        type: 5,
        side: order.side,
        openType: 2,
        vol: order.vol,
        leverage: order.leverage,
      };

      const response = await client.createOrder(params);
      const orderId = response?.data?.orderId;

      await sleep(500);
      closeSpinner.succeed([
        `${chalk.bgBlue.white(' CLOSE ')} ${order.emoji} ${chalk.bold(order.symbol)}`,
        `Volume: ${chalk.yellow(order.vol)}`,
        chalk.gray(`ID: ${orderId}`)
      ].join(' | '));
    }

    // --- Final cleanup ---
    console.log(`\n${chalk.gray.bold('🧹 FINAL CLEANUP')}`);
    console.log(chalk.gray('──────────────────────────────────────────────\n'));

    const cleanupSpinner = ora({
      text: 'Performing final cleanup...',
      color: 'gray'
    }).start();

    await sleep(2000);
    await client.closeAllPositions();

    cleanupSpinner.succeed(chalk.green('All positions have been force-closed'));
    console.log(`\n${chalk.bold.green('✅ All operations completed successfully!')}\n`);

  } catch (error) {
    console.error(`\n${chalk.bgRed.white(' ERROR ')} ${chalk.redBright(error.message)}\n`);
    process.exit(1);
  }
}

main();