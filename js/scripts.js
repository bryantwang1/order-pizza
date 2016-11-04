$(function() {

  $("#new-pizza1").submit(function(event) {
    var pizzaSize = parseInt($("#pizza1-size").val());
    alert("You chose a " + pizzaSize + "\" pizza!");
  });


});
