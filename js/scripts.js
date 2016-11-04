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
var pizzaCounter = 1;
$("div#result-area").append("<ul id=\"pizza-list\"></ul>");
$("#page-headline").text("What would you like to order?");

  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var pizzaSize = parseInt($("#pizza-size").val());

    var pizza1 = new Pizza(pizzaSize);

    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      if($(this).val() === "green-peppers") {
        pizza1.toppings.push("green bell peppers");
      } else {
        pizza1.toppings.push($(this).val());
      }
    });

    pizza1.pricer();
    var toppingsString = "";

    if(pizza1.toppings.length === 0) {

    } else {
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
    }

    $("ul#pizza-list").append("<li><span class=\"pizza\">Pizza " + pizzaCounter + "</span></li>")

    $(".pizza").last().click(function() {
      $("div#pizza-details").show();
      $("#pizza-size-display").text("Your pie size is " + pizza1.size + "\".")

      if(pizza1.toppings.length === 0) {
        $("#pizza-toppings-display").text("Cheese only.");
      } else if(pizza1.toppings.length === 1) {
        $("#pizza-toppings-display").text("Your topping is " + toppingsString + ".");
      } else {
        $("#pizza-toppings-display").text("Your toppings are " + toppingsString + ".");
      }

      $("#pizza-price-display").text("Your price is $" + pizza1.price + ".");
    })

    $("form#new-pizza").hide();
    $("button#another-pizza").show();
    $("#page-headline").text("Click a pizza to show its details.");

    pizzaCounter++;
  });

  $("button#another-pizza").click(function() {
    $("form#new-pizza").show();
    $("button#another-pizza").hide();
    $("div#pizza-details").hide();
    $("#page-headline").text("What would you like to order?");
    $("input:checkbox").prop('checked', false);
    $("#pizza-size").val("8\"");
  });

});
