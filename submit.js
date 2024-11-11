// Retrieve order details from localStorage
const orderSummary = JSON.parse(localStorage.getItem("orderSummary"));

// Check if orderSummary exists in localStorage
if (orderSummary) {
  // Display the order summary on the page
  document.getElementById("summaryName").textContent = orderSummary.name;
  document.getElementById("summaryEmail").textContent = orderSummary.email;
  document.getElementById("summaryQuantity").textContent =
    orderSummary.quantity;
  document.getElementById("summaryExtras").textContent =
    orderSummary.extras.join(", ");
  document.getElementById("summaryPrice").textContent =
    orderSummary.totalPrice.toFixed(2);
} else {
  // If no order data exists, display a message or redirect the user
  document.querySelector(".receipt").innerHTML =
    "<p>No order details found.</p>";
}
