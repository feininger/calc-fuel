var legend = document.querySelector(".legend");

var radioAllCost = document.querySelector("#allCost");
radioAllCost.addEventListener("change", function (event) {
  legend.innerHTML = "Средний расход топлива (литров/100 км)";
});

var radioAverageCost = document.querySelector("#averageCost");
radioAverageCost.addEventListener("change", function (event) {
  legend.innerHTML = "Израсходовано (литров)";
});

var buttonCalc = document.querySelector("#calc");
var totalExpense = document.querySelector("#total-expense");
var total = document.querySelector("#total-cost");

buttonCalc.addEventListener("click", function (event) {
  console.log(document.querySelector('input[name="radio"]:checked').getAttribute("id"));
  var expense = document.querySelector("#input-1").value;
  var distance = document.querySelector("#input-2").value;
  var cost = document.querySelector("#input-3").value;
  var radio = document.querySelector('input[name="radio"]:checked').getAttribute("id");
  if (radio == "allCost") {
    totalCost(expense, distance, cost);
  } else {
    averageCost(expense, distance, cost);
  }
  
});

function totalCost(expense, distance, cost) {
  totalExpense.innerHTML = "Всего нужно топлива: <b>" 
    + ((expense/100) * distance).toFixed() + "</b> л.";
  total.innerHTML = "Стоимость топлива: <b>" 
    + ((expense/100) * distance * cost).toFixed() + "</b> руб.";
}

function averageCost(expense, distance, cost) {
  totalExpense.innerHTML = "Средний расход: <b>" 
    + (expense/(distance/100)) + "</b> литров/100 км";
  total.innerHTML = "Стоимость топлива: <b>" 
    + (expense/(distance/100)) * cost + "</b> руб.";
}