# getPositionMode

Get position mode.

- **Endpoint:** `/api/v1/private/position/position_mode`

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const positionMode = await client.getPositionMode();

console.log(positionMode);
```

---

## Response

```JSON
{ 
  "success": true,
  "code": 0,
  "data": 1
}
```