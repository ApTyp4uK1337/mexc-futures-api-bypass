<?php

require 'MexcBypass.php';

$mexc = new MexcBypass('YOUR_API_KEY', true, null);

$assets = $mexc->getFuturesAssets();

print_r($assets);
