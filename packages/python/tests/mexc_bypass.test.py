import asyncio
from src.MexcBypass import MexcBypass

async def test_mexc_bypass():
    async with MexcBypass(
        api_key="your_mexc_token",
        is_testnet=True,
        proxy_url=None
    ) as client:
        

        print("\n1. Testing server time:")
        time_resp = await client.get_server_time()
        print(time_resp)
        

        print("\n2. Testing user info:")
        user_info = await client.get_user_info()
        print(user_info)
        

        print("\n3. Testing futures assets:")
        assets = await client.get_futures_assets()
        print(assets)
        

        print("\n4. Testing futures contracts:")
        contracts = await client.get_futures_contracts({"symbol": "BTC_USDT"})
        print(contracts)
        

        print("\n5. Testing tickers:")
        tickers = await client.get_futures_tickers({"symbol": "BTC_USDT"})
        print(tickers)
        

        print("\n6. Testing order creation:")
        order = await client.create_futures_order({
            "symbol": "BTC_USDT",
            "price": "30000",
            "type": "1",
            "open_type": "1",
            "position_mode": "1",
            "side": "1",
            "vol": "1",
            "leverage": "10"
        })
        print("Order created:", order)
        
        order_id = order.get('data', {}).get('order_id') if order.get('data') else None
        

        if order_id:
            print("\n7. Testing get order by ID:")
            order_info = await client.get_futures_orders_by_id({"ids": str(order_id)})
            print(order_info)
            
            print("\n8. Testing order cancellation:")
            cancel_resp = await client.cancel_futures_orders({"ids": [order_id]})
            print(cancel_resp)
        

        print("\n9. Testing open positions:")
        positions = await client.get_futures_open_positions({"symbol": "BTC_USDT"})
        print(positions)
        

        print("\n10. Testing trigger order creation:")
        trigger_order = await client.create_futures_trigger_order({
            "symbol": "BTC_USDT",
            "price": "25000",
            "vol": "1",
            "leverage": "10",
            "side": "1",
            "open_type": "1",
            "trigger_price": "28000",
            "trigger_type": "1",
            "execute_cycle": "1",
            "order_type": "1",
            "trend": "1"
        })
        print("Trigger order created:", trigger_order)
        
        trigger_order_id = trigger_order.get('data')
        

        print("\n11. Testing trigger orders list:")
        trigger_orders = await client.get_futures_trigger_orders({"symbol": "BTC_USDT"})
        print(trigger_orders)
        

        if trigger_order_id:
            print("\n12. Testing trigger order cancellation:")
            cancel_trigger = await client.cancel_futures_trigger_orders({"ids": trigger_order_id})
            print(cancel_trigger)
        

        print("\n13. Testing leverage change:")
        leverage_resp = await client.change_futures_position_leverage({
            "symbol": "BTC_USDT",
            "leverage": "20",
            "open_type": "1"
        })
        print(leverage_resp)
        

        print("\n14. Testing close all positions:")
        close_all = await client.close_all_futures_positions()
        print(close_all)
        

        print("\n15. Testing orders history:")
        history = await client.get_futures_orders_history({"symbol": "BTC_USDT"})
        print(history)

if __name__ == "__main__":
    asyncio.run(test_mexc_bypass())