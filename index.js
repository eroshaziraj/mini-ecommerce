fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        data.map((item)=>{
            console.log(item);
            let div = document.getElementById("ghj");
            let img = document.createElement("img");
            let crd = document.createElement("div");
            let txth1 = document.createElement("h1");
            let txtp = document.createElement("p");
            let txtprice = document.createElement("p");
            let txtclear = document.createElement("p");
            localStorage.setItem("Erosi", "345");
            img.className = "img-g";
            crd.className = "crd";
            txtprice.className = "pointer"
            txth1.textContent = item.title;
            txtp.textContent = item.category;
            img.src = item.image;
            localStorage.getItem(JSON.stringify("Erosi"))
            txtclear.textContent = localStorage.getItem("obj");
            txtprice.textContent = item.price + " " + "$";
            crd.appendChild(img);
            crd.appendChild(txth1);
            crd.appendChild(txtp);
            crd.appendChild(txtprice);
            crd.appendChild(txtclear);
            div.appendChild(crd)
            txtprice.addEventListener("click",()=>{
                window.location.href = `detail.html?erosii-id=${item.id}`;
            })
        })
    })
    .then(data => console.log(data));