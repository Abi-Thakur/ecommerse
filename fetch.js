function renderDiscount (element){
  const sellingPrice = element.price;
  const originalPrice = element.compare_price;
  const discountPercent = Math.round(((originalPrice-sellingPrice)/originalPrice)*100)
  return discountPercent
}


function rendercard (data){
  const slider = document.getElementById("sale-slider");
  data.forEach(element => {
    // creating-card
    const card = document.createElement("div"); 
    card.classList.add("card");
    // console.log(element);

    const productImage = document.createElement("img");
    productImage.src = `${element.images}`;

    const imgBox = document.createElement("div");
    imgBox.classList.add("card-img-box");
    imgBox.appendChild(productImage)

    const productTitle = document.createElement("h2");
    productTitle.innerText = `${element.title}`;
    

    const productPrice = document.createElement("p");
    productPrice.classList.add("price")
    productPrice.innerText = `Rs ${element.price}`;
    // console.log(element.desciption)

    const comparingPrice = document.createElement("span");
    comparingPrice.innerText = `Rs ${element.compare_price}`

    const productReview = document.createElement("p");
    productReview.classList.add("review");
    productReview.innerText = `Reviews(${element.review_count})`

    const contentBox = document.createElement("div");
    contentBox.classList.add("card-content-box");
    contentBox.appendChild(productTitle);
    contentBox.appendChild(productPrice);
    contentBox.appendChild(comparingPrice);
    contentBox.appendChild(productReview);

    renderDiscount(element);

    const discountTag = document.createElement("div");
    discountTag.classList.add("discount-tag");
    discountTag.textContent = `-${renderDiscount(element)}%`



    card.appendChild(imgBox);
    card.appendChild(contentBox);
    card.appendChild(discountTag);


    slider.appendChild(card);

  });

}






fetch("/product/product.json")
  .then(res => res.json())
  .then(data => {
    rendercard(data.TodayFlashSales);
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });

