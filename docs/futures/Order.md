# Order

## Properties

**Name** | **Data Type** | **Mandatory** | **Description**
symbol | string | true | the name of the contract
price | decimal | true | price
vol | decimal | true | volume
leverage | int | false | leverage ,Leverage is necessary on Isolated Margin
side | int | true | order direction
type | int | true | orderType,1:price limited order,2:Post Only Maker,3:transact or cancel instantly ,4 : transact completely or cancel completely，5:market orders,6 convert market price to current price
openType | int | true | open type,1:isolated,2:cross
positionId | long | false | position Id，It is recommended to fill in this parameter when closing a position
externalOid | string | false | external order ID
stopLossPrice | decimal | false | stop-loss price
takeProfitPrice | decimal | false | take-profit price
positionMode | int | false | position mode,1:hedge,2:one-way,default: the user's current config
reduceOnly | boolean | false | Default false,For one-way positions, if you need to only reduce positions, pass in true, and two-way positions will not accept this parameter

## Enum: Order.Side
* `Open Long` (value: `'1'`)

* `Close Short` (value: `'2'`)

* `Open Short` (value: `'3'`)

* `Close Long` (value: `'4'`)