var isNumber = function(number) {
	return !isNaN(parseFloat(number)) && isFinite(number);
};

var getPhoneIdiot = function(){
	var phone = prompt("Please enter your phone number in the following format: xxx-xxx-xxxx")
	var validPhoneNumber = (phone.length === 12 ? true : false)

	for(var i = 0; i < phone.length; i++ ) {
		console.log(i)
		if(i === 3 || i === 7) {

			if(phone[i] !== "-") {
				validPhoneNumber = false 
			}

		} else {
			if(!isNumber(phone[i])) {
				validPhoneNumber = false 
			} 
		}
	}
	alert("The phone number you entered is " + validPhoneNumber );
	if(validPhoneNumber) {
		return phone
	} else {
		return getPhoneIdiot()
	}
}



var getBirthdate = function(){
	var birthdate = prompt("Please enter your birth date in the following format : mm/dd/yy")
	var validBirthdate = (birthdate.length === 8? true : false)

	for(var i = 0; i < birthdate.length; i++ ) {
		console.log(i)
		if(i === 2 || i === 5) {

			if(birthdate[i] !== "/") {
				validBirthdate = false
			} 
		} else {
			if(!isNumber(birthdate[i])) {
				validBirthdate = false
			}
		}
	}
	alert("Your birthdate was entered correctly: " + validBirthdate );
	if(validBirthdate) {
		return birthdate
	} else {
		return getBirthdate()
	}
}	



var phoney = getPhoneIdiot()
console.log(phoney)

var oldAge = getBirthdate()
console.log(oldAge)
	



//alert("Your birthdate was entered correctly: " + (birthdate.charAt(2,5) === "/" && birthdate.length === 8 ) );















//alert("The phone number you entered is " + ( phone.charAt(3,7) === "-" && phone.length === 12 + "." ) );

// var birthdate = prompt("Please enter your birth date in the following format : mm/dd/yy")
// var postalcode = prompt("Please enter your postal code in the following format : xxxxx OR xxxxx-xxxx")
// var state = prompt("Please enter your State abbreviation : XX (must use all caps)")
// var married = prompt("Are you married?  Yes or No")

// alert("Your birthdate was entered correctly: " + ( birthdate.charAt(2,5) === "/" && birthdate.length === 8 ) );
// alert("Your postal code is: " + ( postalcode.charAt(5) === "-" || postalcode.length === 4) );
// alert("The state you entered is: " + ( state.toUpperCase(state) && state.length === 2) );
// alert("This question was answered: " + ( married === "yes" || married === "no") );

//=========================================
//while (condition) {
//     code block to be executed
// }

// EXAMPLE:
// while (i < 10) {
//     text += "The number is " + i;
//     i++;
// }

//=====================================
// DO/WHILE:
// do {
//     code block to be executed
// }
// while (condition);

// EXAMPLE
// do {
//     text += "The number is " + i;
//     i++;
// }
// while (i < 10);