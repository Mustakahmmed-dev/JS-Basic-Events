// Propagation
document.getElementById("item3")
.addEventListener("click", function(event){
    
    console.log("Li3")
    event.stopImmediatePropagation;
})

document.getElementById("ul-list")
.addEventListener("click", function(){
    console.log("Ul list container triggered")
})
document.getElementById("section")
.addEventListener("click", function(){
    console.log("Section has triggered")
})
document.getElementById("body")
.addEventListener("click", function(){
    console.log("Body has triggered")
})