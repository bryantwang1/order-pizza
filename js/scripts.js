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
    pizza1.toppings.push($(this).val());
    });

    pizza1.pricer();

    alert("You chose a " + pizza1.size + "\" pizza with " + pizza1.toppings + "! Your price is: $" + pizza1.price);
  });


});
