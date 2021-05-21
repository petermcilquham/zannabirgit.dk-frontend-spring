let intervalDuration = 10000;
let imgArray = [];

setTimeout(function(){
    let img1 = document.getElementById("image1")
    let img2 = document.getElementById("image2")
    let img3 = document.getElementById("image3")
    let img4 = document.getElementById("image4")
    let img5 = document.getElementById("image5")

    imgArray[0] = img1
    imgArray[1] = img2
    imgArray[2] = img3
    imgArray[3] = img4
    imgArray[4] = img5
}, 100)

let imgCount = 0;

setInterval(function() {
    imgArray[imgCount].classList.remove("show")
    imgArray[imgCount].classList.add("hide")
    if(imgCount===4){
        imgCount = 0
    } else {
        imgCount++
    }
    imgArray[imgCount].classList.remove("hide")
    imgArray[imgCount].classList.add("show")
}, intervalDuration);

