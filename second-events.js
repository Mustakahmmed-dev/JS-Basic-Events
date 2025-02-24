// Keydown, keyup, mouseover, mouseout, mouseenter, mousemove, mousehover
document.getElementById("test-typing")
.addEventListener("blur", function(event){
    // console.log("Mouse is outside")
})


// Github Delete button test
document.getElementById("input-field")
.addEventListener("keyup", function(event){
    let user = event.target;
    const userInput = user.value;
    const deleteBtn = document.getElementById("btn-delete");

    if(userInput === "delete"){
        deleteBtn.removeAttribute("disabled");
    }
    else{
        deleteBtn.setAttribute("disabled", true);
    }
    
    // Delete the headline
document.getElementById("btn-delete")
.addEventListener("click", function(){
    document.getElementById("headline").style.display = "none";
})

})
