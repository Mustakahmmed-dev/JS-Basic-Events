let resultArea = document.getElementById("result-area");
    resultArea.style.display = "none";

document.getElementById("btn-search")
.addEventListener("click", function(){
    resultArea.style.display = "block";
    let resultLen = document.getElementById("total-found").value = 0;

    let searchingText = document.getElementById("input-search-field").value;
    let searching = searchingText.toLowerCase();
    
    let productsContainer = document.getElementById("products-container");

    let products = document.querySelectorAll("#products-container > div");
    
    for(let product of products){
        if(product.innerText.toLowerCase().includes(searching)){
            productsContainer.append(product);
        }
        else{
            product.style.display = "none";
        }
    }
   
})
