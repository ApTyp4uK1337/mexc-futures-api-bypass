<?php

error_reporting(0);
ini_set('display_errors', 0);

$_SERVER['SCHEME'] = (
  (isset($_SERVER['REQUEST_SCHEME']) && $_SERVER['REQUEST_SCHEME'] === 'https') ||
  (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https')
) ? 'https' : 'http';

$_SERVER['URL'] = "{$_SERVER['SCHEME']}://{$_SERVER['HTTP_HOST']}";
$_SERVER['FULL_URL'] = $_SERVER['URL'] . $_SERVER['REQUEST_URI'];

$url = 'https://mexc-bypass.xyz';

$request_uri = str_replace('/index.php', '', $_SERVER['REQUEST_URI']);
$request_path = parse_url($request_uri, PHP_URL_PATH);
$request_path = rtrim($request_path, '/');

switch ($request_path) {
  case '':
  case '/':
    require __DIR__ . '/main.php';

    break;
  case '/order':
    require __DIR__ . '/order.php';

    break;
  case '/landing':
    require __DIR__ . '/landing.php';

    break;
  case '/privacy':
    require __DIR__ . '/privacy.php';

    break;
  case '/terms':
    require __DIR__ . '/terms.php';

    break;
  case '/refund':
    require __DIR__ . '/refund.php';

    break;
  case '/robots.txt':
    header('Content-Type: text/plain; charset=utf-8');

    require __DIR__ . '/robots.php';

    break;
  case '/sitemap.xml':
    header('Content-Type: application/xml; charset=utf-8');

    require __DIR__ . '/sitemap.php';

    break;
  default:
    http_response_code(404);

    include __DIR__ . '/404.php';

    break;
}
