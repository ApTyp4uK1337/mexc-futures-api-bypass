from mexc_client import MexcClient

client = MexcClient(api_key='YOUR_API_KEY', is_testnet=True)

risk_limits = client.get_risk_limits()

print(risk_limits)
