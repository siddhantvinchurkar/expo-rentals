const functions = require('firebase-functions');
const admin = require('firebase-admin');
const db = admin.initializeApp().firestore();
const validator = require("email-validator");

/* Function to add an email to the database */

exports.addEmail = functions.https.onRequest((request, response) => {
	var email = request.query.email;
	var docId = 'null';
	if (validator.validate(email)) {
		db.collection('email_list').where('email', '==', email).get().then((querySnapshot) => {
			var testBool = false;
			querySnapshot.forEach((doc) => {
				testBool = true;
				docId = doc.id;
			});
			if (testBool) {
				db.collection('email_list').doc(docId).update({ email: email, updated_on: new Date() }).then(() => {
					console.log('Email updated!');
					response.set({ 'Access-Control-Allow-Origin': '*' }).send(true);
					return true;
				}).catch((error) => {
					console.error(error);
					response.set({ 'Access-Control-Allow-Origin': '*' }).send(false);
					return false;
				});
			}
			else {
				db.collection('email_list').add({ email: email, created_on: new Date() }).then((doc) => {
					docId = doc.id;
					console.log('Email created! doc.id = ' + docId);
					response.set({ 'Access-Control-Allow-Origin': '*' }).send(true);
					return true;
				}).catch((error) => {
					console.error(error);
					response.set({ 'Access-Control-Allow-Origin': '*' }).send(false);
					return false;
				});
			}
			return true;
		}).catch((error) => {
			console.error(error);
			response.set({ 'Access-Control-Allow-Origin': '*' }).send(false);
			return false;
		});
		return true;
	}
	else {
		console.error('Invalid email address provided!');
		response.set({ 'Access-Control-Allow-Origin': '*' }).send(false);
		return false;
	}
});

/* Function to deny access */

const denyAccess = (res) => {
	res.statusCode = 401;
	res.setHeader('WWW-Authenticate', 'Basic realm="Authorization Required');
	res.end('Unauthorized');
}

/* Function to authorize user and download list of emails sorted by date in descending order */

const USERNAME = 'admin'
const PASSWORD = 'admin'

exports.getEmails = functions.https.onRequest((req, res) => {
	if (typeof req.headers.authorization !== 'string') {
		denyAccess(res);
		return;
	}

	const base64Auth = req.headers.authorization.split(' ')[1];
	if (typeof base64Auth !== 'string') {
		denyAccess(res);
		return;
	}

	const [user, pass] = Buffer.from(base64Auth,
		'base64').toString().split(':');
	if (user !== USERNAME || pass !== PASSWORD) {
		denyAccess(res);
		return;
	}

	db.collection('email_list').orderBy('created_on', 'desc').get().then((querySnapshot) => {
		var csv = "Email Address,Collected On";
		querySnapshot.forEach((doc) => {
			csv += '\n' + doc.data().email + ',' + doc.data().created_on.toDate();
		});
		res.setHeader('Content-disposition', 'attachment; filename=exporentals_emails_' + new Date() + '.csv');
		res.set('Content-Type', 'text/csv');
		res.set({ 'Access-Control-Allow-Origin': '*' }).status(200).send(csv);
		res.end();
		return true;
	}).catch((error) => {
		console.error(error);
	});

});

/* Function to record a sign in attempt */

exports.recordSignInAttempt = functions.https.onRequest((request, response) => {
	var phone = request.query.phone;
	var stage = request.query.stage;
	var docId = 'null';
	if (phone.length === 10) {
		db.collection('sign_in_attempts').add({ phone: phone, created_on: new Date(), stage: stage }).then((doc) => {
			docId = doc.id;
			console.log('Sign in attempt created! doc.id = ' + docId);
			response.set({ 'Access-Control-Allow-Origin': '*' }).send(true);
			return true;
		}).catch((error) => {
			console.error(error);
			response.set({ 'Access-Control-Allow-Origin': '*' }).send(false);
			return false;
		});
	}
	else {
		console.error('Invalid phone number provided!');
		response.set({ 'Access-Control-Allow-Origin': '*' }).send(false);
		return false;
	}
});