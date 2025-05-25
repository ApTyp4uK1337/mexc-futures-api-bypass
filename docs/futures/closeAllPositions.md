
# closeAllPositions

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.closeAllPositions();

console.log(result);
```

---

## Response

```JSON
{ 
  "success": true,
  "code": 0,
  "data": [] 
}
```