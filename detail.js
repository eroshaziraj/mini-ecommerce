const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('erosii-id');

fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('productImage').src = data.image;
        document.getElementById('title').textContent = data.title;
        document.getElementById('category').textContent = `Category: ${data.category}`;
        document.getElementById('price').textContent = `Price: $${data.price}`;
        document.getElementById('description').textContent = data.description;
    });
