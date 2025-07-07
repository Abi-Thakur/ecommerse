fetch("/product/product.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });