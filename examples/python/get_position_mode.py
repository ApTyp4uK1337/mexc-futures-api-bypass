from mexc_client import MexcClient

client = MexcClient(api_key='YOUR_API_KEY', is_testnet=True)

position_mode = client.get_position_mode()

print(position_mode)
