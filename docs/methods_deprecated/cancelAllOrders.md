# cancelAllOrders

Cancel all uncompleted orders under a contract.

- **Endpoint:** `/api/v1/private/order/cancel_all`

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ❌            | the name of the contract, cancel specific orders placed under this contract when fill the symbol , otherwise , cancel all orders without filling |

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.cancelAllOrders();

console.log(result);
```

---

## Response

```JSON
{
    "success": true,
    "code": 0,
}
```