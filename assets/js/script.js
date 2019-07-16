
// Reveal Animations When Scrolling
new WOW().init();


// Close navbar on click outside hamburger button
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});


//set active navigation after click
$(".nav-link").on("click", (event) => {
    $(".navbar-nav").find(".active").removeClass('active');
    $(event.target).parent().addClass('active');
  });

  
// Calculation years-work-finance
let startingYear = 2008;
let currentYear = new Date().getFullYear();
let elapsedTime = currentYear - startingYear;
let yearsWorkFinance = document.getElementById("years-work-finance");
yearsWorkFinance.innerHTML = elapsedTime.toString();

