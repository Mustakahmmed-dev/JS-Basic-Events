// Search and show the products

document.getElementById("btn-search")
.addEventListener("click", function(){
let searchQuery = document.getElementById("search-input").value.toLowerCase();
let searchedItems = document.getElementById("searched-items");
let products = document.getElementsByClassName("product-description");

for(let product of products){
      

   if(product.innerText.toLowerCase().includes(searchQuery)){
    searchedItems.appendChild(product);
   }
   else{
    product.style.display = "none";
   }
}
})
