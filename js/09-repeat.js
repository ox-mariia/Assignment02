// MILES CALCULATOR
let miles, gallons, mpg, again = "y";
do {
  miles = parseFloat(window.prompt("Enter miles driven"));
  gallons = parseFloat(window.prompt("Enter tank size in gallons"));
  if (!isNaN(miles) && miles> 0 && !isNaN(gallons) && gallons> 0){
    mpg = miles/gallons;
    window.document.write("Miles per gallon: " + parseInt(mpg) + "<br>");
  } else {
    window.document.write("One or more entries are invalid");
  }
  while(true) {
    again = window.prompt("Another enrty, y/n");
    if (again === "y" || again === "n") {
        break;
    }
  } 
}
while(again === "y");
