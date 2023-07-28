
let basketItems = [];

function addToBasket(product) {
  basketItems.push(product);
  updateBasket();
}

function updateBasket() {
  const basketList = document.getElementById("basket-list");
  basketList.innerHTML = "";
  basketItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    basketList.appendChild(li);
  });
}

function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;

  // Replace 'your.email@example.com' with your actual email address
  const emailAddress = "your.email@example.com";
  const subject = "Order from Website";
  const body = `Customer Name: ${name}\nQuantity: ${quantity}\nProducts: ${basketItems.join(", ")}`;

  const mailToLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailToLink;

  // Clear the basket after sending the email
  basketItems = [];
  updateBasket();
}
