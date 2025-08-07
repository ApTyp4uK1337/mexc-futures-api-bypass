import asyncio
from src.MexcBypass import MexcBypass

async def test_mexc_bypass():
    # Инициализация с тестовыми параметрами (замените на свои реальные данные)
    async with MexcBypass(
        api_key="WEB3d87af12d2d1101ccbf08e91d3a51bd4dc9b21096b1cdf8db3e308a704dc0da3",
        is_testnet=True,  # Используем тестовую сеть
        proxy_url=None    # Прокси при необходимости
    ) as client:
        
        # 1. Проверка серверного времени
        print("\n1. Testing server time:")
        time_resp = await client.get_server_time()
        print(time_resp)
        
        # 2. Получение информации о пользователе
        print("\n2. Testing user info:")
        user_info = await client.get_user_info()
        print(user_info)
        
        # 3. Получение информации о фьючерсных активах
        print("\n3. Testing futures assets:")
        assets = await client.get_futures_assets()
        print(assets)
        
        # 4. Получение списка контрактов
        print("\n4. Testing futures contracts:")
        contracts = await client.get_futures_contracts({"symbol": "BTC_USDT"})
        print(contracts)
        
        # 5. Получение тикеров
        print("\n5. Testing tickers:")
        tickers = await client.get_futures_tickers({"symbol": "BTC_USDT"})
        print(tickers)
        
        # 6. Создание тестового ордера (лимитного)
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
        
        # 7. Получение информации о созданном ордере
        if order_id:
            print("\n7. Testing get order by ID:")
            order_info = await client.get_futures_orders_by_id({"ids": str(order_id)})
            print(order_info)
            
            # 8. Отмена созданного ордера
            print("\n8. Testing order cancellation:")
            cancel_resp = await client.cancel_futures_orders({"ids": [order_id]})
            print(cancel_resp)
        
        # 9. Получение открытых позиций
        print("\n9. Testing open positions:")
        positions = await client.get_futures_open_positions({"symbol": "BTC_USDT"})
        print(positions)
        
        # 10. Создание триггерного ордера
        print("\n10. Testing trigger order creation:")
        trigger_order = await client.create_futures_trigger_order({
            "symbol": "BTC_USDT",
            "price": "25000",  # Не реальная цена, для теста
            "vol": "1",
            "leverage": "10",
            "side": "1",
            "open_type": "1",
            "trigger_price": "28000",  # Не реальная цена, для теста
            "trigger_type": "1",
            "execute_cycle": "1",
            "order_type": "1",
            "trend": "1"
        })
        print("Trigger order created:", trigger_order)
        
        trigger_order_id = trigger_order.get('data')
        
        # 11. Получение списка триггерных ордеров
        print("\n11. Testing trigger orders list:")
        trigger_orders = await client.get_futures_trigger_orders({"symbol": "BTC_USDT"})
        print(trigger_orders)
        
        # 12. Отмена триггерного ордера
        if trigger_order_id:
            print("\n12. Testing trigger order cancellation:")
            cancel_trigger = await client.cancel_futures_trigger_orders({"ids": trigger_order_id})
            print(cancel_trigger)
        
        # 13. Тестирование изменения кредитного плеча
        print("\n13. Testing leverage change:")
        leverage_resp = await client.change_futures_position_leverage({
            "symbol": "BTC_USDT",
            "leverage": "20",
            "open_type": "1"
        })
        print(leverage_resp)
        
        # 14. Тестирование закрытия всех позиций
        print("\n14. Testing close all positions:")
        close_all = await client.close_all_futures_positions()
        print(close_all)
        
        # 15. Тестирование истории ордеров
        print("\n15. Testing orders history:")
        history = await client.get_futures_orders_history({"symbol": "BTC_USDT"})
        print(history)

if __name__ == "__main__":
    asyncio.run(test_mexc_bypass())