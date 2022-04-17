/* 
NOTE: We're going to write a simple if to simulate an validation.
In a real world example this could check the availability on DynamoDB
trough the AWS SDK, directly to MySQL or even making a request to
another service in a service oriented architecture (SOA)
*/

exports.handler = async (event) => {
  console.log(event)
  let message = JSON.parse(event.Records[0].body)
  let availableItemName = "Nvidia RTX 3070" // Obviously it's an example, everyone knows that there aren't graphics cards available
  let available = (message.itemName == availableItemName)
  const response = {
    message: message,
    available: available
  };
  return response;
};
