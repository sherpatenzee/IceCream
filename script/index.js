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
 
 
//toppings
 let price = (((newScoop - 1) * 1.25) + 2.25);
 let extraTop = 0;
  let sprinkle = document.getElementById("sprinkle").checked;
  if (sprinkle) {
    extraTop += .50;
  }
  let cream = document.getElementById("cream").checked;
  if (cream) {
    extraTop += .25;
  }
  let fudge = document.getElementById("fudge").checked;
  if (fudge) {
    extraTop += 1.25;
  }
  let cherry = document.getElementById("cherry").checked;
  if (cherry) {
    extraTop += .25;
  }


 let basePrice = document.getElementById("base");
 let add = price + extraTop;
 basePrice.innerHTML = "Base price: $" + add;


let tax = 0.08 * add;
let taxTotal = document.getElementById("tax");
taxTotal.innerHTML = "Tax: $" + tax;


let totalDue = add + tax ;
let total = document.getElementById("total");
total.innerHTML = "Total Due: $" + totalDue;





}


