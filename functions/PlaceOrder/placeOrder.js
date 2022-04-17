const AWS = require('aws-sdk')
const uuid = require('uuid')
const dynamodb = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" })

exports.handler = (event, context, callback) => {
  console.log(event)
  let orderId = uuid.v4()
  console.log(orderId)
  let params = {
    TableName: process.env.DDB_TABLE,
    Item: {
      customer_id: event.message.customerId,
      order_id: orderId,
      item_name: event.message.itemName
    },
    ReturnConsumedCapacity: 'TOTAL'
  }
  let response = {
    message: event.message,
    order_id: orderId,
    available: event.available
  }
  console.log(params)
  dynamodb.put(params, (err, data) => {
    if (err) {
      console.log(err)
      callback(err)
    } else {
      console.log(data)
      callback(null, response)
    }
  })
};