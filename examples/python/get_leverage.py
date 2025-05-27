from mexc_client import MexcClient

client = MexcClient(api_key='YOUR_API_KEY', is_testnet=True)

leverage = client.leverage({
  'symbol': 'BTC_USDT'
})

print(leverage)
