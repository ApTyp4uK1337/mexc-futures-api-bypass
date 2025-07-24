<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (json_last_error() !== JSON_ERROR_NONE) {
  echo json_encode([
    'status' => 'error',
    'message' => 'Invalid JSON received.'
  ]);

  exit;
}

$required = ['open_type', 'symbol', 'side', 'quantity', 'leverage', 'token'];

foreach ($required as $key) {
  if (empty($data[$key])) {
    echo json_encode([
      'status' => 'error',
      'message' => "Missing field: $key"
    ]);

    exit;
  }
}

if (!preg_match('/^WEB[0-9a-f]{64}$/i', $data['token'])) {
  echo json_encode([
    'status' => 'error',
    'message' => 'Invalid token format. Token should start with WEB followed by 64 hexadecimal characters.'
  ]);

  exit;
}

if (!isset($data['take_profit_price']) || $data['take_profit_price'] <= 0) {
  $data['take_profit_price'] = null;
  $data['take_profit_type'] = null;
}

if (!isset($data['stop_loss_price']) || $data['stop_loss_price'] <= 0) {
  $data['stop_loss_price'] = null;
  $data['stop_loss_type'] = null;
}

include("{$_SERVER['DOCUMENT_ROOT']}/libs/MexcClient.php");

$client = new MexcClient($data['token'], true);

$response = $client->createOrder([
  'symbol' => $data['symbol'],
  'side' => $data['side'],
  'type' => 5,
  'openType' => $data['open_type'],
  'side' => $data['side'],
  'vol' => $data['quantity'],
  'leverage' => $data['leverage'],
  'takeProfitPrice' => $data['take_profit_price'],
  'profitTrend' => $data['take_profit_type'],
  'stopLossPrice' => $data['stop_loss_price'],
  'lossTrend' => $data['stop_loss_type']
]);

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
