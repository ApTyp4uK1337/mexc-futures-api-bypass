from mexc_client import MexcClient

client = MexcClient(api_key='YOUR_API_KEY', is_testnet=True)

order = client.create_order({
    'symbol': 'BTC_USDT',
    'type': 5,
    'side': 1,
    'openType': 2,
    'vol': 15,
    'leverage': 25
})

print(order)
