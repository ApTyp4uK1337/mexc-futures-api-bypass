<?php

require 'MexcClient.php';

$client = new MexcClient('YOUR_API_KEY', true, 'socks5://user:pass@127.0.0.1:1080');

try {
  $assets = $client->getAssets();

  print_r($assets);
} catch (Exception $e) {
  echo 'Ошибка: ' . $e->getMessage();
}
