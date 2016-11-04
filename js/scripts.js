$(function() {
  var pizza1Proteins = [];
  var pizza1Veggies = [];

  $("#new-pizza1").submit(function(event) {
    event.preventDefault;

    var pizzaSize = parseInt($("#pizza1-size").val());

    $("input:checkbox[name=pizza1-protein]:checked").each(function(){
    pizza1Proteins.push($(this).val());
    });

    $("input:checkbox[name=pizza1-veggie]:checked").each(function(){
    pizza1Veggies.push($(this).val());
    });

    alert("You chose a " + pizzaSize + "\" pizza with " + pizza1Proteins + " and " + pizza1Veggies + "!");
  });


});
