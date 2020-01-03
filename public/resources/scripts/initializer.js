$(document).ready(function () {

	/* Register a service worker */

	if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }

	/* Prepare UI */

	$('.parallax').parallax();
	$('.modal#progressDialogModal').modal({ dismissible: false });

	M.Modal.getInstance(progressDialogModal).open();

	/* Initialize Firebase */

	firebaseConfig = {
		apiKey: "AIzaSyATfCTM7HAtLpiB37gsDbcCzFEf654m0rk",
		authDomain: "expo-rentals.firebaseapp.com",
		databaseURL: "https://expo-rentals.firebaseio.com",
		projectId: "expo-rentals",
		storageBucket: "expo-rentals.appspot.com",
		messagingSenderId: "83076990549",
		appId: "1:83076990549:web:502ac01780b0c14c7a36dc",
		measurementId: "G-C21TYY3VP1"
	};
	firebase.initializeApp(firebaseConfig);

	/* Lazy load necessary JS files */

	$.when(
		$.getScript("resources/scripts/main.js"),
		$.getScript("resources/scripts/firebase-analytics.js"),
		$.getScript("resources/scripts/firebase-auth.js"),
		$.getScript("resources/scripts/firebase-firestore.js"),
		$.getScript("resources/scripts/firebase-performance.js"),
		$.getScript("resources/scripts/sweetalert.js"),
		$.Deferred(function (deferred) {
			$(deferred.resolve);
		})
	).done(function () {

		/* Initialize Firebase services */

		firebase.analytics();
		firebase.auth().useDeviceLanguage();
		var perf = firebase.performance();
		var db = firebase.firestore();

		/* Kill UI Blocker */

		M.Modal.getInstance(progressDialogModal).close();

	});

});