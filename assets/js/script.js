
// Reveal Animations When Scrolling
new WOW().init();


// Calculation years-work-finance
let startingYear = 2008;
let currentYear = new Date().getFullYear();
let elapsedTime = currentYear - startingYear;
let yearsWorkFinance = document.getElementById("years-work-finance");
yearsWorkFinance.innerHTML = elapsedTime.toString();
