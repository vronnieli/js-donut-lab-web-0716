//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.

var donuts = prompt("Enter number of donuts")
var guests = prompt("Enter number of guests")

if (parseInt(donuts) >= parseInt(guests)) {
  alert(`There are ${parseInt(donuts)} donuts and ${parseInt(guests)}, enough for each guest.`);
} else {
  alert(`There are ${parseInt(donuts)} donuts and ${parseInt(guests)}, not enough for each guest.`)
}
