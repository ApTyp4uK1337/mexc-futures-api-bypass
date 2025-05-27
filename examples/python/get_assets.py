from mexc_client import MexcClient

client = MexcClient(api_key='YOUR_API_KEY', is_testnet=True)

asset = client.get_asseet({
    'currency': 'USDT',
})

print(asset)
