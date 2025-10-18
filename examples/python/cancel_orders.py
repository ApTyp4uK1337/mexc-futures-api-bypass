from mexc_client import MexcClient

client = MexcClient(api_key='YOUR_API_KEY', is_testnet=True)

result = client.cancel_orders({
    'ids': ['101716841474621953', '108885377779302912', '108886241042563584']
})

print(result)
