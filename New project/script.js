const orderForm = document.querySelector("#orderForm");
const businessEmail = "ricneyglobaltrade@gmail.com";

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(orderForm);
  const customerName = formData.get("customerName").trim();
  const customerPhone = formData.get("customerPhone").trim();
  const productCategory = formData.get("productCategory");
  const productDetails = formData.get("productDetails").trim();
  const deliveryDetails = formData.get("deliveryDetails").trim();

  const subject = `Order inquiry from ${customerName} - ${productCategory}`;
  const body = [
    "Hello Ricney Trading,",
    "",
    "I would like to place an order inquiry with the following details:",
    "",
    `Name: ${customerName}`,
    `Phone: ${customerPhone}`,
    `Product category: ${productCategory}`,
    "",
    "Product details:",
    productDetails,
    "",
    "Quantity and delivery location:",
    deliveryDetails,
    "",
    "Please contact me with pricing, availability, and next steps.",
    "",
    "Thank you."
  ].join("\n");

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  const encodedEmail = encodeURIComponent(businessEmail);

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}&su=${encodedSubject}&body=${encodedBody}`;
  window.open(gmailComposeUrl, "_blank", "noopener");
});
