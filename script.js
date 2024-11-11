function handleOrder(event) {
  event.preventDefault();

 
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  // Get selected extras
  const extras = [];
  let totalPrice = 5.0; 

  document
    .querySelectorAll(".checkbox-grid input[type='checkbox']:checked")
    .forEach((checkbox) => {
      extras.push(checkbox.value);
      totalPrice += parseFloat(checkbox.dataset.price);
    });

  // Calculate total price with quantity
  totalPrice *= quantity;

  // Store order details in localStorage
  const orderSummary = {
    name,
    email,
    quantity,
    extras,
    totalPrice,
  };

  localStorage.setItem("orderSummary", JSON.stringify(orderSummary));

  // Redirect to the summary page
  window.location.href = "summary.html";
}

// Attach the handleOrder function to the form
document.getElementById("orderForm").addEventListener("submit", handleOrder);
