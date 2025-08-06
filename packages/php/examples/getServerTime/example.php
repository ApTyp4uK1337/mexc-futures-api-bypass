<?php

require 'MexcBypass.php';

$mexc = new MexcBypass('YOUR_API_KEY', true, null);

$response = $mexc->getServerTime();

print_r($response);
