var phone = prompt("Please enter your phone	number in the following format : xxx-xxx-xxxx")
var birthdate = prompt("Please enter your birth date in the following format : mm/dd/yy")
var postalcode = prompt("Please enter your postal code in the following format : xxxxx OR xxxxx-xxxx")
var state = prompt("Please enter your State abbreviation : XX (must use all caps)")
var married = prompt("Are you married?  Yes or No")


alert("The phone number you entered is " + ( phone.charAt(3,7) === "-" && phone.length === 12 + "." ) );
alert("Your birthdate was entered correctly: " + ( birthdate.charAt(2,5) === "/" && birthdate.length === 8 ) );
alert("Your postal code is: " + ( postalcode.charAt(5) === "-" || postalcode.length === 4) );
alert("The state you entered is: " + ( state.toUpperCase(state) && state.length === 2) );
alert("This question was answered: " + ( married === "yes" || married === "no") );


var phone = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};