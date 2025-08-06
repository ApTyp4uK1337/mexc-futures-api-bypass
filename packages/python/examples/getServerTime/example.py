import asyncio
from src.MexcBypass import MexcBypass

async def main():
    async with MexcBypass(api_key='YOUR_API_KEY', is_testnet=True) as client:
        result = await client.get_server_time()
        print(result)

if __name__ == "__main__":
    asyncio.run(main())