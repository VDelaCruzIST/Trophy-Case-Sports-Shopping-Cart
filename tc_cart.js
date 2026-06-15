"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Vanessa Dela Cruz
   Date: April 2, 2023
   
   Filename: tc_cart.js
	
*/
//variable for the running total of the order
var orderTotal = 0;

//contains the HTML code for the shopping cart
var cartHTML = "<table>";
cartHTML += "<tr>";
cartHTML += "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>";
cartHTML += "</tr>";

//loop through item array which adds a table row fr each item ordered
for (var i = 0; i < item.length; i++)
   {
      cartHTML += "<tr>";
      cartHTML += "<td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
      cartHTML += "<td>" + itemDescription[i] + "</td>";
      cartHTML += "<td>$" + itemPrice[i] + "</td>";
      cartHTML += "<td>" + itemQty[i] + "</td>";

      //calculates the cost of items ordered
      var itemCost = itemPrice[i] * itemQty[i];
      cartHTML += "<td>$" + itemCost + "</td>";
      cartHTML += "</tr>";
      //running total cost of the order
      orderTotal += itemCost;
   }
cartHTML += "<tr>";
cartHTML += "<td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td>";
cartHTML += "</tr>";
cartHTML += "</table>";

//applies the ending cartHTML value code to the inner HTML
document.getElementById("cart").innerHTML = cartHTML;