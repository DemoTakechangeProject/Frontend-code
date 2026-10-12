let products = [];

fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
    products = data;
    console.log("API responce is : ",products);

    const container = document.getElementById("product-container");

    container.innerHTML = products.map(product=>{
        return `
            <div class="product-card">
                    <img src="${product.image}">
                    <h3>${product.title}</h3>
                    <p class="price">${product.price}</p>
                    <p>${product.category}</p>
                    <p>${product.rating.rate}</p>
                    <p>${product.rating.count}</p>
                </div>
        `
    });
})

