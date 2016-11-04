var priceyToppings = ["tuna", "prosciutto", "shrimp"];


function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 8;
}

Pizza.prototype.pricer = function() {
  console.log("pricer run");
  this.price += ((this.size - 8) / 2);

  for(var idx = 0; idx < this.toppings.length ;idx++) {
    console.log("enter loop");
    if(priceyToppings.includes(this.toppings[idx])) {
      this.price += 2;
    } else {
      this.price += 1;
    }
  }
}

// UI below this line.

$(function() {

  $("form#new-pizza1").submit(function(event) {
    event.preventDefault();

    var pizzaSize = parseInt($("#pizza1-size").val());

    var pizza1 = new Pizza(pizzaSize);
    console.log(pizza1.price);

    $("input:checkbox[name=pizza1-toppings]:checked").each(function(){
      if($(this).val() === "green-peppers") {
        pizza1.toppings.push("green bell peppers");
      } else {
        pizza1.toppings.push($(this).val());
      }
    });

    pizza1.pricer();

    $("#result-area").empty();
    if(pizza1.toppings.length === 0) {
      $("#result-area").append("<h2>You chose a " + pizza1.size + "\" cheese pizza! Your price is: $" + pizza1.price + ".</h2>");
    } else {
      var toppingsString = "";
      if(pizza1.toppings.length === 1) {
        toppingsString += pizza1.toppings[0];
      } else if (pizza1.toppings.length === 2) {
        toppingsString += pizza1.toppings[0] + " and " + pizza1.toppings[1];
      } else {
        for(var idx = 0; idx < pizza1.toppings.length-1; idx++) {
          toppingsString += pizza1.toppings[idx] + ", ";
        }
        toppingsString += "and " + pizza1.toppings[pizza1.toppings.length-1];
      }
      $("#result-area").append("<h2>You chose a " + pizza1.size + "\" pizza with " + toppingsString + "! Your price is: $" + pizza1.price + ".</h2>");
    }
  });


});
