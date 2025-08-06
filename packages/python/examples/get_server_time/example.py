import asyncio
from src.MexcBypass import MexcBypass

async def main():
    async with MexcBypass(api_key='YOUR_API_KEY', is_testnet=True) as mexc:
        result = await mexc.get_server_time()
        
        print(result)

asyncio.run(main())