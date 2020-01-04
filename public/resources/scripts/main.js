$(document).ready(function () {

	/* Register a service worker */

	if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }

	/* Prepare UI */

	$('.sidenav').sidenav();
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

		/* Update Footer Year */

		$("#footerYear").html(new Date().getFullYear().toString());

		/* Handle Scrolling */

		$("#about_us").click(function () {
			$('html, body').animate({
				scrollTop: $("#s1").offset().top - 100
			}, 3000);
		});

		$("#how").click(function () {
			$('html, body').animate({
				scrollTop: $("#s2").offset().top - 100
			}, 3000);
		});

		$("#contact_us").click(function () {
			$('html, body').animate({
				scrollTop: $("#footer").offset().top - 370
			}, 3000);
		});

		$("#sides1trigger").click(function () {
			M.Sidenav.getInstance(sidenav).close();
			$('html, body').animate({
				scrollTop: $("#s1").offset().top - 100
			}, 3000);
		});

		$("#sides2trigger").click(function () {
			M.Sidenav.getInstance(sidenav).close();
			$('html, body').animate({
				scrollTop: $("#s2").offset().top - 100
			}, 3000);
		});

		$("#sides3trigger").click(function () {
			M.Sidenav.getInstance(sidenav).close();
			$('html, body').animate({
				scrollTop: $("#footer").offset().top - 100
			}, 3000);
		});

		/* Form Monitors */

		var email = null;
		var emailMonitor = setInterval(function () {

			/* Collect Value */

			email = $('#email').val();

			/* Validate Value */

			if (email.match('[a-z0-9._%+-]+@+[a-z]+\.+[a-z]') !== null) $('#submit').removeClass('disabled');
			else $('#submit').addClass('disabled');

		}, 100);

		/* Handle email submission */

		$('#submit').click(function () {
			M.Modal.getInstance(progressDialogModal).open();
			$.get('https://expo-rentals.web.app/addEmail?email=' + email, function (data) {
				if (data) {
					M.Modal.getInstance(progressDialogModal).close();
					Swal.fire('Perfect!', 'We\'ll keep you updated.', 'success');
				}
				else {
					M.Modal.getInstance(progressDialogModal).close();
					Swal.fire('Oops!', 'Something went wrong.', 'error');
				}
			}).fail(function () {
				M.Modal.getInstance(progressDialogModal).close();
				Swal.fire('Oops!', 'Something went wrong.', 'error');
			});;
		});

	});

});