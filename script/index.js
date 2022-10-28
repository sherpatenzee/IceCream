"use strict";
window.onload = function () {
        document.getElementById ("options").style.display = "none";
        document.getElementById("cup").onclick = function () 
        {
          document. getElementById ("options").style.display = "block";
        }
        document. getElementById ("cone").onclick = function () 
        {
          document.getElementById ("options").style.display = "none";
      
        }

        document.getElementById("submitBtn").onclick = totalCost; 
      }
      

function totalCost() {

 //no of scoop 
 let scoops = document.getElementById("scoops");
 let newScoop = scoops.value;
 let ScoopCost = 2.25;
 //let addScoop = 1.25;
 let price = ScoopCost * newScoop;

 let basePrice = document.getElementById("base");
 basePrice.innerHTML = "Base price: $" + price;


let tax = 0.08 * price;
let taxTotal = document.getElementById("tax");
taxTotal.innerHTML = "Tax: $" + tax;


let totalDue = price + tax 
let total = document.getElementById("total");
total.innerHTML = "Total Due: $" + totalDue;






}

