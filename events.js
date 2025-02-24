// 1. page title changes
document.getElementById("change-title").addEventListener("click", function(){
    let pageTitle = document.getElementById("page-title");
    pageTitle.innerText = "This title has been changed by js";
})


// 2. Submission update
document.getElementById("submit-btn").addEventListener("click", function(){
    const submitUpdate = document.getElementById("submit-update");
    submitUpdate.innerText = "You have successfully submitted the form";
})

// 3. Comment box
document.getElementById("comment-post-btn").addEventListener("click", function(){
    // 1. Input value
    let inputCommentTexts = document.getElementById("comment-texts-box");
    let commentTexts = inputCommentTexts.value;
    
    let newComment = document.createElement("p");
        newComment.classList.add("comment");
        newComment.innerText = commentTexts;

    // 2. Comments container
    let commentsContainer = document.getElementById("comments-container");

    // 3. Add the new comment
    commentsContainer.appendChild(newComment);

    // 4. Clear the remaining texts by default
    inputCommentTexts.value = "";
})