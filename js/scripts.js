function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

// UI below this line.

$(function() {

  $("#new-pizza1").submit(function(event) {
    event.preventDefault;

    var pizzaSize = parseInt($("#pizza1-size").val());

    var pizza1 = new Pizza(pizzaSize);

    $("input:checkbox[name=pizza1-toppings]:checked").each(function(){
    pizza1.toppings.push($(this).val());
    });

    alert("You chose a " + pizza1.size + "\" pizza with " + pizza1.toppings + "!");
  });


});
