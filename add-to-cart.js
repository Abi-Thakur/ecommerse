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

    const existingCount = addToCartBox.querySelector(".count-box");
    if (existingCount) {
        existingCount.textContent  = productCount();
    }

    else{
    const countContainer = document.createElement("div");
    countContainer.classList.add("count-box");
    countContainer.textContent = productCount();
    addToCartBox.appendChild(countContainer);
    }   
}


export function addCart (element){
    const productCart = getProductCart()
    productCart.push(element)
    localStorage.setItem("products", JSON.stringify(productCart));
    console.log(getProductCart());
    renderCount()
}


renderCount()

