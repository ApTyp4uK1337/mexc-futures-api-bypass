<!doctype html>
<html class="dark" lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>MEXC Futures API Bypass — Trade MEXC Futures During Maintenance</title>

  <meta name="description" content="MEXC Futures API Bypass — trade MEXC futures during maintenance or when the official API is unavailable. Full access to hidden and restricted methods with automation-ready libraries.">

  <meta name="keywords" content="MEXC API bypass, MEXC futures API, crypto trading during maintenance, MEXC API solution, trade crypto when MEXC down, futures trading API, MEXC tool, bypass exchange downtime, mexc, futures, trading, maintenance, bypass, crypto trading bot, automated trading, MEXC futures bypass, exchange maintenance solution">

  <meta name="author" content="aptyp4uk1337">
  <meta name="robots" content="index, follow">
  <meta name="language" content="en">
  <meta name="revisit-after" content="7 days">

  <link rel="canonical" href="<?php echo $url; ?>/">

  <!-- Preload critical resources -->
  <link rel="preload" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">

  <noscript>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" media="all">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" media="all">
  </noscript>

  <link rel="preload" href="<?php echo $url; ?>/css/style.min.css" as="style">
  <link rel="preload" href="<?php echo $url; ?>/css/tabler-icons.min.css" as="style">

  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="<?php echo $url; ?>/">
  <meta property="og:title" content="MEXC Futures API Bypass — Trade MEXC Futures During Maintenance">
  <meta property="og:description" content="Trade MEXC Futures even during API maintenance. Get full access to our bypass API today.">
  <meta property="og:image" content="<?php echo $url; ?>/images/social-preview.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="MEXC Futures API Bypass">
  <meta property="og:locale" content="en_US">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="<?php echo $url; ?>/">
  <meta name="twitter:title" content="MEXC Futures API Bypass — Trade MEXC Futures During Maintenance">
  <meta name="twitter:description" content="Trade MEXC Futures even during API maintenance. Get full access to our bypass API today.">
  <meta name="twitter:image" content="<?php echo $url; ?>/images/social-preview.jpg">
  <meta name="twitter:creator" content="@aptyp4uk1337">

  <!-- Favicon & Styles -->
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $url; ?>/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo $url; ?>/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo $url; ?>/favicon-16x16.png">
  <link rel="manifest" href="<?php echo $url; ?>/site.webmanifest">

  <!-- CSS with media queries for print -->
  <link rel="stylesheet" href="<?php echo $url; ?>/css/style.min.css" media="all">

  <!-- Load Google Analytics asynchronously -->
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-TQ4Z58CVYV', {
      'transport_type': 'beacon'
    });
  </script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TQ4Z58CVYV"></script>
</head>

<body>
  <div class="container">
    <header class="header">
      <h1 class="title">MEXC Futures API Bypass</h1>
      <p class="subtitle">Trade during maintenance periods with our specialized API solution</p>
      <div class="social-links">
        <a href="https://t.me/aptyp4uk1337/19" title="Telegram" target="_blank" rel="noopener noreferrer" class="social-link">
          <i class="ti ti-brand-telegram"></i> Telegram
        </a>
        <a href="discord://-/users/841963614398578708/" title="Discord" target="_blank" rel="noopener noreferrer" class="social-link">
          <i class="ti ti-brand-discord"></i> Discord
        </a>
        <a href="https://github.com/ApTyp4uK1337/mexc-api-sdk" title="GitHub" target="_blank" rel="noopener noreferrer"
          class="social-link">
          <i class="ti ti-brand-github"></i> GitHub
        </a>
      </div>
    </header>

    <main class="main-content">
      <section class="card order-section" itemscope itemtype="https://schema.org/WebApplication">
        <div class="card-header">
          <h2 itemprop="name"><i class="ti ti-adjustments-alt"></i>Order Parameters</h2>
          <p class="card-subtitle" itemprop="description">Test the API yourself</p>
        </div>
        <form class="card-body" id="orderForm">
          <div class="form-grid">
            <div class="form-group switch-group">
              <label for="token">
                <span class="tooltip"
                  data-tooltip-content="User token is not logged or saved in any way. If you wish to invalidate it, logout from MEXC.">
                  <i class="ti ti-lock"></i>
                </span>
                User Token
                <span class="tooltip" data-tooltip-image="<?php echo $url; ?>/images/token-help.jpg">
                  <i class="ti ti-info-circle"></i>
                </span>
              </label>
              <input type="password" class="form-control" id="token" name="token" placeholder="Enter your user token"
                required>
            </div>

            <div class="form-group">
              <label for="order_type">Order Type</label>
              <select class="form-control" id="order_type" name="order_type">
                <option value="market" selected>Market Order</option>
                <option value="limit" disabled>Limit Order</option>
                <option value="trigger" disabled>Trigger Order</option>
              </select>
            </div>

            <div class="form-group">
              <label for="open_type">Open Type</label>
              <select class="form-control" id="open_type" name="open_type">
                <option value="1">Isolated</option>
                <option value="2">Cross</option>
              </select>
            </div>

            <div class="form-group">
              <label for="symbol">Trading Pair</label>
              <select class="form-control" id="symbol" name="symbol">
                <option value="BTC_USDT">BTC_USDT</option>
                <option value="ETH_USDT">ETH_USDT</option>
                <option value="SOL_USDT">SOL_USDT</option>
                <option value="XRP_USDT">XRP_USDT</option>
                <option value="SUI_USDT">SUI_USDT</option>
                <option value="DOGE_USDT">DOGE_USDT</option>
                <option value="PEPE_USDT">PEPE_USDT</option>
                <option value="SEI_USDT">SEI_USDT</option>
                <option value="LINK_USDT">LINK_USDT</option>
                <option value="TRX_USDT">TRX_USDT</option>
                <option value="SHIB_USDT">SHIB_USDT</option>
              </select>
            </div>

            <div class="form-group">
              <label for="side">Order Side</label>
              <select class="form-control" id="side" name="side">
                <option value="1">Open Long</option>
                <option value="4">Close Long</option>
                <option value="3">Open Short</option>
                <option value="2">Close Short</option>
              </select>
            </div>

            <div class="form-group">
              <label for="quantity">
                Quantity
                <span class="tooltip" data-tooltip-image="<?php echo $url; ?>/images/quantity-help.jpg">
                  <i class="ti ti-info-circle"></i>
                </span>
              </label>
              <input type="number" class="form-control" id="quantity" name="quantity" placeholder="0.00" required
                step="0.00001" min="0">
            </div>

            <div class="form-group">
              <label for="leverage">Leverage</label>
              <input type="number" class="form-control" id="leverage" name="leverage" placeholder="10x" required
                max="500" min="1" value="10">
            </div>

            <div class="form-group">
              <label for="take_profit_price">Take Profit Price</label>
              <input type="number" class="form-control" id="take_profit_price" name="take_profit_price"
                placeholder="0.00 USDT" step="0.00001" min="0">
            </div>

            <div class="form-group">
              <label for="take_profit_type">Take Profit Type</label>
              <select class="form-control" id="take_profit_type" name="take_profit_type">
                <option value="1">Last Price</option>
                <option value="2">Fair Price</option>
                <option value="3">Index Price</option>
              </select>
            </div>

            <div class="form-group">
              <label for="stop_loss_price">Stop Loss Price</label>
              <input type="number" class="form-control" id="stop_loss_price" name="stop_loss_price"
                placeholder="0.00 USDT" step="0.00001" min="0">
            </div>

            <div class="form-group">
              <label for="stop_loss_type">Stop Loss Type</label>
              <select class="form-control" id="stop_loss_type" name="stop_loss_type">
                <option value="1">Last Price</option>
                <option value="2">Fair Price</option>
                <option value="3">Index Price</option>
              </select>
            </div>

            <div class="form-group switch-group">
              <label>
                <span>Testnet Mode</span>
                <div class="disabled switch">
                  <input type="checkbox" checked disabled>
                  <span class="slider"></span>
                </div>
              </label>
              <p class="switch-note">Production API available in full version</p>
            </div>
          </div>

          <button class="btn btn-primary" type="submit">
            <i class="ti ti-send"></i>Submit Order
          </button>

          <div class="console hidden" id="console"></div>
          <div class="response-time hidden" id="responseTime"></div>
        </form>
      </section>

      <section class="card faq-section" itemscope itemtype="https://schema.org/FAQPage">
        <div class="card-header">
          <h2><i class="ti ti-help"></i>FAQ</h2>
          <p class="card-subtitle">Find answers to common questions about our service</p>
        </div>
        <div class="card-body">
          <div class="accordion">

            <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button class="accordion-header" aria-expanded="false" aria-controls="faq1">
                <span class="accordion-icon"><i class="ti ti-question-mark"></i></span>
                <span class="accordion-title" itemprop="name">Is this an actual trading platform?</span>
                <span class="accordion-arrow"><i class="ti ti-chevron-down"></i></span>
              </button>
              <div class="accordion-content" id="faq1" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div class="accordion-body" itemprop="text">
                  <p>No, this is a demo environment for creating orders on the MEXC Futures <strong>testnet</strong> (demo mode).
                    The demo only allows placing orders in the test network.
                    The full version unlocks complete access to all available API methods.
                    You can view the orders you create here: <a href="https://futures.testnet.mexc.com/futures/" target="_blank">MEXC Demo Trading</a>.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button class="accordion-header" aria-expanded="false" aria-controls="faq2">
                <span class="accordion-icon"><i class="ti ti-question-mark"></i></span>
                <span class="accordion-title" itemprop="name">Does it rely on any third-party services to send requests?</span>
                <span class="accordion-arrow"><i class="ti ti-chevron-down"></i></span>
              </button>
              <div class="accordion-content" id="faq2" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div class="accordion-body" itemprop="text">
                  <p>No, all requests are handled directly without using third-party services.</p>
                </div>
              </div>
            </div>

            <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button class="accordion-header" aria-expanded="false" aria-controls="faq3">
                <span class="accordion-icon"><i class="ti ti-question-mark"></i></span>
                <span class="accordion-title" itemprop="name">Is the code distributed as open source or in compiled form?</span>
                <span class="accordion-arrow"><i class="ti ti-chevron-down"></i></span>
              </button>
              <div class="accordion-content" id="faq3" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div class="accordion-body" itemprop="text">
                  <p>At the moment, the code is fully open source with no obfuscation.</p>
                </div>
              </div>
            </div>

            <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button class="accordion-header" aria-expanded="false" aria-controls="faq4">
                <span class="accordion-icon"><i class="ti ti-question-mark"></i></span>
                <span class="accordion-title" itemprop="name">Can I use the library with multiple accounts?</span>
                <span class="accordion-arrow"><i class="ti ti-chevron-down"></i></span>
              </button>
              <div class="accordion-content" id="faq4" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div class="accordion-body" itemprop="text">
                  <p>Yes, there are no restrictions on the number of accounts. Proxy support is included.</p>
                </div>
              </div>
            </div>

            <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button class="accordion-header" aria-expanded="false" aria-controls="faq5">
                <span class="accordion-icon"><i class="ti ti-question-mark"></i></span>
                <span class="accordion-title" itemprop="name">How is authentication handled? Do I need an API key?</span>
                <span class="accordion-arrow"><i class="ti ti-chevron-down"></i></span>
              </button>
              <div class="accordion-content" id="faq5" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div class="accordion-body" itemprop="text">
                  <p>Authentication is done using a User Token instead of an API key.</p>
                </div>
              </div>
            </div>

            <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button class="accordion-header" aria-expanded="false" aria-controls="faq6">
                <span class="accordion-icon"><i class="ti ti-question-mark"></i></span>
                <span class="accordion-title" itemprop="name">What is the maximum number of orders I can send?</span>
                <span class="accordion-arrow"><i class="ti ti-chevron-down"></i></span>
              </button>
              <div class="accordion-content" id="faq6" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div class="accordion-body" itemprop="text">
                  <p>You can check the results of our 200-request rate limit test:</p>
                  <p>
                    <span class="tooltip" data-tooltip-image="<?php echo $url; ?>/images/rate-limit-test.jpg">
                      <i class="ti ti-photo"></i> Screenshot
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button class="accordion-header" aria-expanded="false" aria-controls="faq7">
                <span class="accordion-icon"><i class="ti ti-question-mark"></i></span>
                <span class="accordion-title" itemprop="name">Where can I find my User Token?</span>
                <span class="accordion-arrow"><i class="ti ti-chevron-down"></i></span>
              </button>
              <div class="accordion-content" id="faq7" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div class="accordion-body" itemprop="text">
                  <ol>
                    <li>Sign in to your MEXC account.</li>
                    <li>Open Developer Tools in your browser (F12 or right-click → "Inspect").</li>
                    <li>Go to the "Application" or "Storage" tab.</li>
                    <li>Open the "Cookies" section and select the MEXC domain.</li>
                    <li>Find the "u_id" cookie and copy its value (starts with "WEB").</li>
                  </ol>
                  <p>
                    <span class="tooltip" data-tooltip-image="<?php echo $url; ?>/images/token-help.jpg">
                      <i class="ti ti-photo"></i> Screenshot
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button class="accordion-header" aria-expanded="false" aria-controls="faq8">
                <span class="accordion-icon"><i class="ti ti-question-mark"></i></span>
                <span class="accordion-title" itemprop="name">Is access subscription-based or can I buy it outright?</span>
                <span class="accordion-arrow"><i class="ti ti-chevron-down"></i></span>
              </button>
              <div class="accordion-content" id="faq8" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div class="accordion-body" itemprop="text">
                  <p>We offer two options:</p>
                  <ul>
                    <li><strong>30-day subscription</strong> — access to methods via our server.</li>
                    <li><strong>Full source code purchase</strong> — lifetime access to all libraries without restrictions.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button class="accordion-header" aria-expanded="false" aria-controls="faq9">
                <span class="accordion-icon"><i class="ti ti-question-mark"></i></span>
                <span class="accordion-title" itemprop="name">Where can I learn more?</span>
                <span class="accordion-arrow"><i class="ti ti-chevron-down"></i></span>
              </button>
              <div class="accordion-content" id="faq9" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div class="accordion-body" itemprop="text">
                  <p>See the full project details on my <a href="https://github.com/ApTyp4uK1337/mexc-api-sdk" title="GitHub" target="_blank" rel="noopener noreferrer"><i class="ti ti-brand-github"></i> GitHub</a>.</p>
                </div>
              </div>
            </div>

            <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button class="accordion-header" aria-expanded="false" aria-controls="faq10">
                <span class="accordion-icon"><i class="ti ti-question-mark"></i></span>
                <span class="accordion-title" itemprop="name">How do I get full API access?</span>
                <span class="accordion-arrow"><i class="ti ti-chevron-down"></i></span>
              </button>
              <div class="accordion-content" id="faq10" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div class="accordion-body" itemprop="text">
                  <p>Message me on <a href="https://t.me/aptyp4uk1337_bot?text=%F0%9F%91%8B%20Hi%2C%20I%20am%20writing%20regarding%20the%20acquisition%20of%20MEXC%20Futures%20API." target="_blank" rel="noopener noreferrer"><i class="ti ti-brand-telegram"></i> Telegram</a> for details.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>

    <section class="card pricing-section" itemscope itemtype="https://schema.org/Product">
      <meta itemprop="image" content="<?php echo $url; ?>/images/social-preview.jpg">
      <meta itemprop="description" content="Premium API access and source code for MEXC futures trading with direct access, multi-account support, and blazing fast execution.">

      <div class="card-header">
        <h2 itemprop="name"><i class="ti ti-currency-dollar"></i> Pricing Options</h2>
        <p class="card-subtitle">Choose the best option for your trading needs</p>
      </div>
      <div class="card-body">
        <div class="pricing-grid">
          <!-- Subscription Option -->
          <div class="pricing-card" itemscope itemtype="https://schema.org/Offer" itemprop="offers" itemtype="https://schema.org/Offer">
            <link itemprop="availability" href="https://schema.org/InStock">
            <div class="pricing-header">
              <h3 itemprop="name">API Subscription</h3>
              <div class="pricing-price">
                <span class="price" itemprop="price" content="45">$45</span>
                <span class="period" itemprop="priceCurrency" content="USD">/ 30 days</span>
              </div>
              <div class="pricing-badge pricing-badge-hot">
                <span>🔥 <s>$60</s> <span class="new-price">$45</span> / 30 days</span>
              </div>
            </div>
            <ul class="pricing-features">
              <li><i class="ti ti-check"></i> Full API access</li>
              <li><i class="ti ti-check"></i> Regular updates</li>
              <li><i class="ti ti-check"></i> Priority support</li>
              <li><i class="ti ti-check"></i> Multi-account support</li>
              <li><i class="ti ti-check"></i> Proxy integration</li>
            </ul>
            <a href="https://t.me/aptyp4uk1337_bot?text=%F0%9F%91%8B%20Hi%2C%20I%20am%20writing%20regarding%20the%20API%20Subscription"
              title="Get Subscription"
              class="btn btn-subscription"
              target="_blank"
              rel="noopener noreferrer"
              itemprop="url">
              <i class="ti ti-shopping-cart"></i> Get Subscription
            </a>
          </div>

          <!-- Source Code Option -->
          <div class="pricing-card pricing-card-featured" itemscope itemtype="https://schema.org/Offer" itemprop="offers" itemtype="https://schema.org/Offer">
            <link itemprop="availability" href="https://schema.org/InStock">
            <div class="pricing-badge pricing-badge-popular">
              <span>Most Popular</span>
            </div>
            <div class="pricing-header">
              <h3 itemprop="name">Source Code</h3>
              <div class="pricing-price">
                <span class="price" itemprop="price" content="175">$175</span>
                <span class="period" itemprop="priceCurrency" content="USD">one-time</span>
              </div>
              <div class="pricing-badge pricing-badge-hot">
                <span>🔥 <s>$199</s> <span class="new-price">$175</span></span>
              </div>
            </div>
            <ul class="pricing-features">
              <li><i class="ti ti-check"></i> Full source code</li>
              <li><i class="ti ti-check"></i> Lifetime access</li>
              <li><i class="ti ti-check"></i> Free updates</li>
              <li><i class="ti ti-check"></i> Full customization</li>
              <li><i class="ti ti-check"></i> Commercial use</li>
            </ul>
            <a href="https://t.me/aptyp4uk1337_bot?text=%F0%9F%91%8B%20Hi%2C%20I%20am%20writing%20regarding%20the%20Source%20Code%20purchase"
              title="Get Full Access"
              class="btn btn-source-code"
              target="_blank"
              rel="noopener noreferrer"
              itemprop="url">
              <span class="btn-text"><i class="ti ti-shopping-cart"></i> Buy Source Code</span>
              <span class="btn-hover-text">Get Full Access</span>
            </a>
          </div>
        </div>

        <div class="pricing-features-grid">
          <div class="feature-item">
            <i class="ti ti-bolt"></i>
            <h4>Blazing Fast</h4>
            <p>High-speed order execution with minimal latency</p>
          </div>
          <div class="feature-item">
            <i class="ti ti-shield-lock"></i>
            <h4>Direct Access</h4>
            <p>No third-party requests - direct to MEXC</p>
          </div>
          <div class="feature-item">
            <i class="ti ti-world"></i>
            <h4>Network Support</h4>
            <p>Works on both mainnet & testnet</p>
          </div>
          <div class="feature-item">
            <i class="ti ti-users"></i>
            <h4>Multi-Account</h4>
            <p>Support for multiple accounts with proxy integration</p>
          </div>
          <div class="feature-item">
            <i class="ti ti-code"></i>
            <h4>Language Support</h4>
            <p>Compatible with any programming language</p>
          </div>
          <div class="feature-item">
            <i class="ti ti-git-fork"></i>
            <h4>Ready Libraries</h4>
            <p>Simple PHP, Python & Node.js libraries included</p>
          </div>
        </div>

        <div class="simple-methods-link">
          <a href="https://github.com/ApTyp4uK1337/mexc-api-sdk/tree/main/docs#-available-methods"
            title="View All API Methods on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary">
            <i class="ti ti-code"></i> View All API Methods on GitHub
          </a>
        </div>

        <div class="pricing-disclaimer">
          <div class="disclaimer-content">
            <i class="ti ti-alert-triangle"></i>
            <div>
              <p><strong>Important:</strong> This is not an official MEXC method and I am not affiliated with MEXC.</p>
              <p>Payment methods: <b>USDT</b>, <b>BTC</b>, <b>ETH</b>, <b>TON</b>, <b>BNB</b></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-container">
        <h2 class="cta-title"><i class="ti ti-rocket"></i> Ready to unlock full access?</h2>
        <p class="cta-text">Get the full libraries with unlimited API features.</p>
        <a href="https://t.me/aptyp4uk1337_bot?text=%F0%9F%91%8B%20Hi%2C%20I%20am%20writing%20regarding%20the%20acquisition%20of%20MEXC%20Futures%20API."
          title="Purchase Now" target="_blank" rel="noopener noreferrer" class="btn btn-cta">
          <i class="ti ti-shopping-cart"></i>Purchase Now
        </a>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-links">
        <a href="<?php echo $url; ?>/privacy" title="Privacy Policy" class="footer-link">Privacy Policy</a>
        <span>·</span>
        <a href="<?php echo $url; ?>/terms" title="Terms of Service" class="footer-link">Terms of Service</a>
        <span>·</span>
        <a href="<?php echo $url; ?>/refund" title="Refund Policy" class="footer-link">Refund Policy</a>
      </div>
      <p>© 2025 MEXC Futures API Bypass<br>Made with ❤️ by <a href="https://github.com/aptyp4uk1337" title="@aptyp4uk1337" class="footer-link"
          target="_blank" rel="noopener noreferrer">@aptyp4uk1337</a></p>
      <div class="footer-links">
        <a href="https://t.me/aptyp4uk1337/19" title="Telegram" target="_blank" rel="noopener noreferrer" class="footer-icon"
          aria-label="Telegram">
          <i class="ti ti-brand-telegram"></i>
        </a>
        <a href="discord://-/users/841963614398578708/" title="Discord" target="_blank" rel="noopener noreferrer" class="footer-icon"
          aria-label="Discord">
          <i class="ti ti-brand-discord"></i>
        </a>
        <a href="https://github.com/ApTyp4uK1337/mexc-api-sdk" title="GitHub" target="_blank" rel="noopener noreferrer"
          class="footer-icon" aria-label="GitHub">
          <i class="ti ti-brand-github"></i>
        </a>
      </div>
    </footer>
  </div>

  <!-- Defer non-critical JavaScript -->
  <script src="<?php echo $url; ?>/js/script.js" defer></script>

  <!-- Lazy load images -->
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

      if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });

        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      }
    });
  </script>
</body>

</html>