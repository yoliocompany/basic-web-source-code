

let hour = 2;


let myImage = document.getElementById('image');


if( hour < 18 ){

    myImage.src = 'images/day.png'

}else{

    myImage.src = 'images/night.png'
}


