class SmoothieOrder {
  constructor(name, email, quantity, extras) {
    this.name = name;
    this.email = email;
    this.quantity = quantity;
    this.extras = extras;
    this.basePrice = 5.0;
  }

  // Method to calculate the total price based on quantity and extras
  calculateTotalPrice() {
    let totalPrice = this.basePrice;

    // Add price for each selected extra
    this.extras.forEach((extra) => {
      totalPrice += extra.price;
    });

    // Multiply by quantity
    return totalPrice * this.quantity;
  }

  // Method to save order details in localStorage
  saveOrder() {
    const orderSummary = {
      name: this.name,
      email: this.email,
      quantity: this.quantity,
      extras: this.extras.map((extra) => extra.name),
      totalPrice: this.calculateTotalPrice(),
    };
    localStorage.setItem("orderSummary", JSON.stringify(orderSummary));
  }
}

// Function to handle form submission
function handleOrder(event) {
  event.preventDefault();

  // Capture form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  // Get selected extras
  const extras = [];
  document
    .querySelectorAll(".checkbox-grid input[type='checkbox']:checked")
    .forEach((checkbox) => {
      extras.push({
        name: checkbox.value,
        price: parseFloat(checkbox.dataset.price),
      });
    });

  // Create a new SmoothieOrder instance
  const smoothieOrder = new SmoothieOrder(name, email, quantity, extras);

  // Save the order and redirect to the summary page
  smoothieOrder.saveOrder();
  window.location.href = "summary.html";
}

// Attach the handleOrder function to the form
document.getElementById("orderForm").addEventListener("submit", handleOrder);
