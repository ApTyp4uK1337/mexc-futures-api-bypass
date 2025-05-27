from mexc_client import MexcClient

client = MexcClient(api_key='YOUR_API_KEY', is_testnet=True)

order = client.create_order({
    'symbol': 'BTC_USDT',
    'vol': 15,
    'leverage': 25,
    'side': 1,
    'openType': 2,
    'triggerPrice': 95000.00,
    'triggerType': 1,
    'executeCycle': 1,
    'orderType': 5,
    'trend': 2
})

print(order)