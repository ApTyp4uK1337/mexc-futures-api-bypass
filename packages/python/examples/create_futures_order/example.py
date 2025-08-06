import asyncio
from src.MexcBypass import MexcBypass

async def main():
    async with MexcBypass(api_key='YOUR_API_KEY', is_testnet=True) as mexc:
        order_params = {
            'symbol': 'BTC_USDT',
            'type': 5,
            'open_type': 1,
            'position_mode': 1,
            'side': 1,
            'vol': 1,
            'leverage': 20,
            'position_id': None,
            'external_id': 'my-custom-id-001',
            'take_profit_price': None,
            'stop_loss_price': None,
        }

        response = await mexc.create_futures_order(order_params)

        print(response)

asyncio.run(main())
