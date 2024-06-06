var div = document.querySelector("div");
var largerBtn = document.querySelector(".large");
var smallerBtn = document.querySelector(".small")

function largeText(){
    div.classList.add("changeFontSizeLarge");
}

function smallText(){
    div.classList.add("changeFontSizeSmall");
}

largerBtn.onclick = largeText;
smallerBtn.onclick = smallText;