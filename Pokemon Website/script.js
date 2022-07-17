var seeMoreButton = document.querySelectorAll("button.see-more");

for (let i = 0; i < seeMoreButton.length; i++) {
    var button = seeMoreButton[i];
    
    button.addEventListener("click", function() {
        var moreImages = document.getElementsByClassName("more-images");
        moreImages[i].style.display = "block";
    })
}
