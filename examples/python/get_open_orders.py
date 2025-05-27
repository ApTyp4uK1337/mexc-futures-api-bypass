from mexc_client import MexcClient

client = MexcClient(api_key='YOUR_API_KEY', is_testnet=True)

orders = client.get_open_orders({
  'symbol': 'ETH_USDT'
})

print(orders)
