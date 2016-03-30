$(document).ready(function() {

  //BUSINESS LOGIC
  var leapYear = function(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
  };

  //UI LOGIC
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".years").text(year);

    if (isNaN(year)) {
      alert("Please type a valid number");
    } else if (!result) {
      $(".not").text("not");
    } else if (result) {
      $(".not").text("");
    } else {
      alert("please type a valid number.")
    };



    $("#result").show();
  });
});
