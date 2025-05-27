from mexc_client import MexcClient

client = MexcClient(api_key='YOUR_API_KEY', is_testnet=True)

result = client.change_margin({
    'positionId': 1337,
    'amount': 15,
    'type': "ADD"
})

print(result)
