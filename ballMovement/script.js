
var display = document.getElementById("display")
var ball = document.getElementById("ball")
var body = document.querySelector('body') 

// i had a whole array with random assignment of creepy smiley faces going on.
// it seemed a bit much, but i am a little proud of throwing the code together.

//const faces = []
// i really outdid myself. 
//function nightmare() {
//
//var face = document.createElement('img') ; face.src = 'smile1.png' ; face.className= 'face' ; faces.push(face)
//var face2 = document.createElement('img'); face2.src = 'smile2.png'; face2.className= 'face'; faces.push(face2)
//var face3 = document.createElement('img'); face3.src = 'smile3.png'; face3.className= 'face'; faces.push(face3)
//var face4 = document.createElement('img'); face4.src = 'smile4.png'; face4.className= 'face'; faces.push(face4)
//var face5 = document.createElement('img'); face5.src = 'smile5.png'; face5.className= 'face'; faces.push(face5)
//var face6 = document.createElement('img'); face6.src = 'smile6.png'; face6.className= 'face'; faces.push(face6)
//var face7 = document.createElement('img'); face7.src = 'smile7.png'; face7.className= 'face'; faces.push(face7)
//
//var faceNum = Math.floor(Math.random() * 7)
//var chosenFace = faces[faceNum]
//
//ball.appendChild(chosenFace)
//}
//setInterval(nightmare,500)

var positionX = 100
var positionY = 100
var velocity = 20

var reverse = false

function moveBall() {
    var Xmin = 50;    var Xmax = 400
    var Ymin = 50;    var Ymax = 400

    if(positionX >= Xmax || positionY >= Ymax && reverse === false) {
        reverse = true
    }
    if (positionX <= Xmin && positionY <= Ymin && reverse === true) {
        reverse = false
    }
    var num1 = Math.floor(Math.random() * 255)
    var num2 = Math.floor(Math.random() * 255) 
    var num3 = Math.floor(Math.random() * 255)
    
    // i don't want to become a developer for some fancy tech company.
    // i just wanna start a youtube channel that does "hello, world" examples 
    // in the most infuriatingly unhelpful ways possible.

    var display = document.getElementById("display")
    display.style.opacity = 50 + '%'
    display.innerHTML = "Hello World" + "<br>" +  "Hello World" + "<br>"+ "Hello World" + "<br>" + "Hello World" + "<br>"
    
    if (!reverse) {
        positionX = positionX + velocity
        ball.style.left = positionX + 'px'
        positionY = positionY + velocity
        ball.style.top = positionY + 'px'
        
        // headache area
        display.style.color = `rgb(${num1}, ${num2}, ${num3})`
        body.classList.remove("bodyAlt")
        body.classList.add("body")
        // image
        var spooky = document.createElement('img')
        spooky.src = 'spooky.png'
        spooky.className= 'ball' 
        ball.appendChild(spooky)
    } else {
        positionX = positionX - velocity
        ball.style.left = positionX + 'px'
        positionY = positionY - velocity
        ball.style.top = positionY + 'px'
        // headache continued
        display.style.color = `rgb(${num3}, ${num2}, ${num1})`  
        body.classList.remove("body")
        body.classList.add("bodyAlt")
        // pumpkin image 
        var pumpkin = document.createElement('img')
        pumpkin.src = 'pumpkin.png'
        pumpkin.className= 'ball' 
        ball.appendChild(pumpkin)
        }
}
setInterval(moveBall, 200);

//
//var velocity = 10;
//var position = 0;
//var ball = document.getElementById('ball');
//
//// YOUR CODE 
//// ----------------
//
////Set global variable that would contain the position, velocity and the html element "ball"
//var positionX = 0;
//var positionY = 2;
//
//var reverse = false;
//
////write a function that can change the position of the html element "ball"
//function moveBall() {
//  // two fixed x-axis coordinates (you will use these variable in step 3)
//    var Xmin = 0;
//    var Xmax = 300;
//    var Ymin = 0;
//    var Ymax = 600;
//
//    if(!reverse){
//        positionX = positionX - velocity;
//        ball.style.left = positionX + 'px';
//        
//        positionY = positionY - velocity;
//        ball.style.top = positionY + 'px';
//    } else if(reverse){
//        positionX = positionX + velocity;
//        ball.style.left = positionX + 'px';
//       
//        positionY = positionY + velocity;
//        ball.style.top = positionY + 'px';
//    };
//
//    if(positionX > Xmax || positionX < Xmin && positionY > Ymax || positionY < Ymin){
//    reverse = !reverse
//};
//  //if(positionY >= Ymax || positionY <= Ymin){
//  //  reverse = !reverse
//  // };
//
//}
//
//// This call the moveBall function every 100ms
//setInterval(moveBall, 1000);
//
//
//// var time = 1000;
//// setInterval(moveLeft,time);
//
//
//
//
//



//var velocity = 10;
//var position = 0;
//var ball = document.getElementById('ball');
//
//
//var positionX = 100;
//var positionY = 100;
//
//var reverse = false;
//
//function moveBall() {
//    var Xmin = 100;
//    var Xmax = 1000;
//    
//    var Ymin = 100;
//    var Ymax = 1000;
//
//    if(reverse == false){
//        positionX = positionX + velocity;
//        ball.style.left = positionX + 'px';
//
//    } if(reverse == true){
//        positionX = positionX - velocity;
//        ball.style.left = positionX + 'px';
//    }
//
//
//
//if(reverse == false){
//            positionY = positionY + velocity;
//            ball.style.top = positionY + 'px';
//            
//        }  if(reverse == true){
//            positionY = positionY - velocity;
//            ball.style.top = positionY + 'px';
//        }
//        
//        
//        if(positionX >= Xmax || positionY <= Ymax) {
//            reverse = true
//        }
//        if (positionX <= Xmin || positionY <= Ymin) {
//            reverse = false
//        }
//    
//}
//
//setInterval(moveBall, 1);
//
//
//
//
