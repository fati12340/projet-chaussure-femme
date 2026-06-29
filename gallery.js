function upDate(previewPic) {
    console.log(previewPic.alt);
    console.log(previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML =
        "HOVER OVER AN IMAGE BELOW TO DISPLAY HERE";
}


function addTabIndex(){

console.log("Page chargée");
let images =document.querySelectorAll(".preview");

for(let i=0;i<images.length;i++){
images[i].setAttribute("tabindex","0");
}
}