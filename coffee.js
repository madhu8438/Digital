      function displaycoffeeDetails(coffeeType) {
         document.getElementById("coffeeType").innerHTML = coffeeType;
         document.getElementById("coffeeTypePurchase").innerHTML = coffeeType;
         document.getElementById("coffeeTypePayment").innerHTML = coffeeType;
         document.getElementById("coffeeDetailsContainer").style.display = "block";
      }

      function displayPurchase() {
         document.getElementById("purchaseContainer").style.display = "block";
         document.getElementById("coffeeDetailsContainer").style.display = "none";
      }

      function displayPayment() {
         var customerName = document.getElementById("customerName").value;
         var juiceType = document.getElementById("coffeeTypePurchase").innerHTML;
         var withIce = document.getElementById("withIce").checked ? "with ice" : "without ice";
         var price = withIce === "with ice" ? "$10" : "$8";
         document.getElementById("customerDetails").innerHTML = customerName + " (" + withIce + ")";
         document.getElementById("price").innerHTML = price;
         document.getElementById("paymentContainer").style.display = "block";
         document.getElementById("purchaseContainer").style.display = "none";
      }

      function returnHome() {
         document.getElementById("paymentContainer").style.display = "none";
         document.getElementById("homeContainer").style.display = "block";
      }
   