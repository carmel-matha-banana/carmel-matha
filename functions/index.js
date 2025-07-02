// functions/index.js

const functions = require('firebase-functions');

exports.greetUser = functions.https.onRequest((request, response) => {
  functions.logger.info("greetUser function called!", {structuredData: true});
  const name = request.query.name || 'World';
  response.status(200).send(`Hello, ${name} from your Firebase backend!`);
});