const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addEmail = functions.https.onRequest((request, response) => {
	var email = request.query.email;
	response.set({ 'Access-Control-Allow-Origin': '*' }).send(email);
	return true;
});