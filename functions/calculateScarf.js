const querystring = require("querystring");

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(querystring.decode(event.body)),
  });
};
