function showMessage() {
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var emailAddy = document.getElementById('emailAddress').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;

	var fnameResult = document.getElementById('fnameResult');
	var lnameResult = document.getElementById('lnameResult');
	var emailResult = document.getElementById('emailResult');
	var subjectResult = document.getElementById('subjectResult');
	var messageResult = document.getElementById('messageResult');

	fnameResult.innerHTML = firstName;
	lnameResult.innerHTML = lastName;
	emailResult.innerHTML = emailAddy;
	subjectResult.innerHTML = subject;
	messageResult.innerHTML = message;
}