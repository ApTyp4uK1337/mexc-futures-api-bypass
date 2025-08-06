<?php

require 'MexcBypass.php';

$mexc = new MexcBypass('YOUR_API_KEY', true, null);

$order = $mexc->createFuturesOrder([
  'symbol' => 'BTC_USDT',
  'type' => 5,
  'open_type' => 1,
  'position_mode' => 1,
  'side' => 1,
  'vol' => 1,
  'leverage' => 20,
  'position_id' => null,
  'external_id' => 'my-custom-id-001',
  'take_profit_price' => null,
  'stop_loss_price' => null,
]);

print_r($order);
