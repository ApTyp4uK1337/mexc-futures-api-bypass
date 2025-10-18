from mexc_client import MexcClient

client = MexcClient(api_key='YOUR_API_KEY', is_testnet=True)

result = client.change_position_mode({
    'positionMode': 1
})

print(result)
