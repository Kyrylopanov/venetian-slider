picArray = [
    "images/exterior.jpg",
    "images/interior.jpg",
    "images/exterior-main.jpg"
    ];

var picIndex = 0; //index counter of picture
var picChecker = false //check next picture: true = first, false = second
var picNum = picArray.length; 
var figure = document.querySelector('figure');
var imgArray = figure.getElementsByTagName('img');
var imgNum = imgArray.length;

setInterval(function() {
    
     for (var i = 0; i < imgNum; i++){ 
        //elem.class == 'first'
        if(picChecker && i < imgNum/2){ 
            // picChecker true, first part of the array 
            imgArray[i].src = picArray[(picIndex + 1) % picNum];
            // picChecker false, second part of the array
        } else if(!picChecker && (i >= imgNum/2)){
            imgArray[i].src = picArray[(picIndex + 1) % picNum];
        }
    };
    
    picChecker = !picChecker;//renew picChecker
    if (picIndex >= picNum)
        picIndex = 1;//Start from first picture
    else
        picIndex++;
    
    figure.classList.toggle('alternative');
}, 3000);
