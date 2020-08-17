const querystring = require("querystring");

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: querystring.decode(event.body),
  });
};
