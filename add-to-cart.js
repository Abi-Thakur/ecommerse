function getProductCart() {
  const data = JSON.parse(localStorage.getItem("products"));
  return Array.isArray(data) ? data : [];
}


function productCount () {
    const productlength = getProductCart().length;
    return productlength
}


function renderCount() {
    const addToCartBox = document.getElementById("add-to-cart-box");

    // Remove existing count box if any
    const existingCount = addToCartBox.querySelector(".count-box");
    if (existingCount) {
        existingCount.remove();
    }

    // Create and append new count box
    const countContainer = document.createElement("div");
    countContainer.classList.add("count-box");
    countContainer.textContent = productCount();

    addToCartBox.appendChild(countContainer);
}


export function addCart (element){
    const productCart = getProductCart()
    productCart.push(element)
    localStorage.setItem("products", JSON.stringify(productCart));
    console.log(getProductCart());
    renderCount()
}