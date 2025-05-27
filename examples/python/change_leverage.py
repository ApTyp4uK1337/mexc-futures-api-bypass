from mexc_client import MexcClient

client = MexcClient(api_key='YOUR_API_KEY', is_testnet=True)

result = client.change_leverage({
    'positionId': 1337,
    'leverage': 15
})

print(result)
