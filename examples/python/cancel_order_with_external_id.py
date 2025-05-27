from mexc_client import MexcClient

client = MexcClient(api_key='YOUR_API_KEY', is_testnet=True)

result = client.cancel_order_with_external_id({
    'symbol': "BTC_USDT",
    'externalOid': "mexc-a-001"
})

print(result)
