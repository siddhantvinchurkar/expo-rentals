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
		scrollTop: $("#footer").offset().top
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