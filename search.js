let resultArea = document.getElementById("result-area");
    resultArea.style.display = "none";

document.getElementById("btn-search")
.addEventListener("click", function(){
    resultArea.style.display = "block";

    let searchingText = document.getElementById("input-search-field").value;
    let searching = searchingText.toLowerCase();
    
    let productsContainer = document.getElementById("products-container");

    let products = document.querySelectorAll("#products-container > div");
        
    let resultCount = 0;
    let leavingProducts = 0;
    for(let product of products){
        if(product.innerText.toLowerCase().includes(searching)){
            product.style.display = "block";

            resultCount++;
        }
        else{
            product.style.display = "none";
            leavingProducts++;
        }
    }
   document.getElementById("total-found").innerText = resultCount;
   document.getElementById("other-found").innerText = leavingProducts;
})
