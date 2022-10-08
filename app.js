var displayDiv = document.getElementById('displayImage')
var imagesDiv = document.getElementById("imageDiv")
var allImages = imagesDiv.getElementsByTagName('IMG')
counter = 0

function imageSlider(){
    displayDiv.src = allImages[counter].src
}
imageSlider()

function prev(){
    if(counter == 0){
        counter = allImages.length-1;
    }
    else{
        counter--
    }
    imageSlider()
}

function next(){
    if(counter == allImages.length-1){
        counter = 0;
    }
    else{
        counter++
    }
    imageSlider()
}