
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");

	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorEmail = document.getElementById("errorEmail");
	const errorAddress = document.getElementById("errorAddress");
	const errorLastN = document.getElementById("errorLastN");
	const errorPassword = document.getElementById("errorPassword");
	const errorPhone = document.getElementById("errorPhone");


	// Form validations inputs
	const letters = /^[A-Za-z]+$/;
	const letterNumber = /^[0-9a-zA-Z]+$/;
	const emailFormat =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
	const phoneNumber = /^\d{9}$/;
	const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;

	// Validate fields entered by the user: name, phone, password, and email

	// Name validation
	if (fName.value === "" || fName.value.length <= 2 || letters.test(fName.value) == false) {
		errorName.style.display = 'block';
		error++;
	} else {
		errorName.style.display = 'none';
	}

	// Email validation
	if (fEmail.value === "" || emailFormat.test(fEmail.value) == false) {
		console.log(emailFormat.test(fEmail));
		errorEmail.style.display = 'block';
		error++;
	} else {
		errorEmail.style.display = 'none';
	}

	// Address validation
	if (fAddress.value === "" || fAddress.value.length <= 2) {
		errorAddress.style.display = 'block';
		error++;
	} else {
		errorAddress.style.display = 'none';
	}

	// LastName validation
	if (fLastN.value === "" || fLastN.value.length <= 2 || letters.test(fLastN.value) == false) {
		errorLastN.style.display = 'block';
		error++;
	} else {
		errorLastN.style.display = 'none';
	}

	// Password validation
	if (fPassword.value === "" || passwordRegex.test(fPassword.value) == false) {
		console.log(passwordRegex.test(fPassword.value));
		console.log(fPassword.value);
		errorPassword.style.display = 'block';
		error++;
	} else {
		console.log(passwordRegex.test(fPassword.value));
		errorPassword.style.display = 'none';
	}
	// Phone validation
	if (fPhone.value === "" || fPhone.value.length < 9 || phoneNumber.test(fPhone.value) == false) {
		errorPhone.style.display = 'block';
		error++;
	} else {
		errorPhone.style.display = 'none';
	}

	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}


	const form = document.querySelector("form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
	});

	console.log(error);
}
