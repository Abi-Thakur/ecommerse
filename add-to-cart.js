function getProductCart() {
  const data = JSON.parse(localStorage.getItem("products"));
  return Array.isArray(data) ? data : [];
}

function addImage(product) {
  const productImage = document.createElement("img");
  productImage.src = product.images[0]; // assuming product.images is an array
  productImage.alt = product.title || "Product Image";
  productImage.classList.add("cart-product-image");
  return productImage;
}

function addProductInfo(product) {
  const productInfoBox = document.createElement("div");
  productInfoBox.classList.add("product-info-box");

  const title = document.createElement("h4");
  title.textContent = product.title || "Untitled";
  title.classList.add("product-title");

  const price = document.createElement("p");
  price.textContent = `₹${product.price || 0}`;
  price.classList.add("product-price");

  productInfoBox.appendChild(title);
  productInfoBox.appendChild(price);

  return productInfoBox;
}

function addInput(){
    const inputbar = document.createElement("input");
    inputbar.type = "number"
    inputbar.value = 1;
    inputbar.classList.add("product-quantity")
    return inputbar 
}


function addQuantityInput (product){
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("quantity-container");

    const inputbar = addInput()
    const subtract  = document.createElement("button");
    subtract.textContent = "-"
    subtract.classList.add("btn");
    subtract.addEventListener("click", () => {
        const value = parseInt(inputbar.value)
        if(value > 1) inputbar.value--
    })

     const addition = document.createElement("button");
     addition.textContent = "+"
    addition.classList.add("btn");
    addition.addEventListener("click", () => {
        const value = parseInt(inputbar.value)
        inputbar.value++
    });
  
    inputContainer.appendChild(subtract);
    inputContainer.appendChild(inputbar);
    inputContainer.appendChild(addition)

    return inputContainer
}


function valueAmount (product){
  const valueContainer = document.createElement("div");
  const value = document.createElement("h3");
  const inputValue = document.getElementsByClassName("product-quantity");
  value.textContent = `${product.price * inputValue} `;
  value.classList.add("product-value");
  valueContainer.appendChild(value);
  return valueContainer;
}

function addProduct() {
  const productContainer = document.getElementById("sidebar-cart-container");
  if (!productContainer) return;

  // Clear old content first
  productContainer.innerHTML = "";

  const savedProducts = getProductCart();
  savedProducts.forEach((product) => {
    const productBox = document.createElement("div");
    productBox.classList.add("product-box");

    const productImage = addImage(product);
    const productInfo = addProductInfo(product);
    const productQuantity = addQuantityInput(product);
    const totalValue = valueAmount(product)


    productBox.appendChild(productImage);
    productBox.appendChild(productInfo);
    productBox.appendChild(productQuantity);
    productBox.appendChild(totalValue);
    
    productContainer.appendChild(productBox);
  });
}

function productCount() {
  return getProductCart().length;
}

function renderCount() {
  const addToCartBox = document.getElementById("add-to-cart-box");
  if (!addToCartBox) return;

  let countContainer = addToCartBox.querySelector(".count-box");
  if (!countContainer) {
    countContainer = document.createElement("div");
    countContainer.classList.add("count-box");
    addToCartBox.appendChild(countContainer);
  }

  countContainer.textContent = productCount();
}

export function addCart(element) {
  const cart = getProductCart();
  cart.push(element);
  localStorage.setItem("products", JSON.stringify(cart));

  renderCount();
  addProduct();
}

// Initialize
renderCount();
addProduct(); // so cart is shown when page loads

// hide cart right sidebae

const hideBtn = document.getElementById('slider-hide')

hideBtn.addEventListener("click", function hideSidebar(){
  const productContainer = document.getElementById("slider-wrapper");
  productContainer.style.display = "none"
  
});

const showBtn  = document.getElementById("add-to-cart-box");

showBtn.addEventListener("click", function(){
  const productContainer = document.getElementById("slider-wrapper");
  productContainer.style.display = "block";
})