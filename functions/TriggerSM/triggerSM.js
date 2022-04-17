const AWS = require('aws-sdk')

exports.handler = async (event) => {
  var stepfunctions = new AWS.StepFunctions();
  var params = {
    stateMachineArn: process.env.SM_ARN, /* required */
    input: JSON.stringify(event)
  };
  let response = await new Promise((resolve, reject) => {
    stepfunctions.startExecution(params, function (err, data) {
      if (err) reject(err); // an error occurred
      else resolve(data);           // successful response
    });
  })

  return response
};
