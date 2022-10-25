

var area = document.getElementById("area")
var amount = 1
var ballWidth = 40
var rightMax = 300 - ballWidth
var leftMax = 0
var Xpos = 0
var Ypos = 0
var YMin = 0 
var Yamount = 1
var YMax = 300  
console.log(area.style)
function create() {
    var ball = document.createElement("div")
    ball.classList.add('ball')
    area.appendChild(ball)

    function moveIt() {
    // SERIOUSLY?? this easy? ..i hate everything.
        Xpos = Xpos + amount
        ball.style.left = Xpos + 'px'
        Ypos = Ypos + Yamount
        ball.style.top = Ypos + 'px'
        if (Xpos > rightMax) {
            amount = --amount
        }
        if (Xpos < leftMax) {
            amount = ++amount
        }  
        if(Ypos < YMin) {
            Yamount = ++Yamount
        }
        if (Ypos > YMax) {
            Yamount = --Yamount
        }
    }
    setInterval(moveIt,10)
}
create()















//var reverse = reverse
//
//const area = {
//    el: document.getElementById("area"),
//    height: 600,
//    width: 400,
//}
//
//function initArea() {
//    area.el.style.width = area.width + 'px'
//    area.el.style.height = area.height + 'px'
//    document.body.appendChild(area.el)
//}
//initArea()
//
//const ball = {
//    be: document.createElement('div'), 
//    amount:  10,
//
//    fu: (ball) => {
//        ball.classList.add('ball')
//        area.el.appendChild(ball)
//    },
//    forward: () => {
//        ball.amount =  ball.amount + 5
//        ball.be.style.left = ball.amount + 'px'
//        //wack()
//    },
//    backward: () => {
//        ball.amount =  ball.amount - 5
//        ball.be.style.left = ball.amount + 'px'
//        
//    },
//    up: () => {
//        ball.amount =  ball.amount + 5
//        ball.be.style.top = ball.amount + 'px'
//    }
//}
//ball.fu(ball.be)
//
//let anotherBall
//
//
//function gimmeBounds() {
//    
//    let ballBounds = ball.be.getBoundingClientRect(ball)
//    console.log(ballBounds)
//}
//
//gimmeBounds()
//
////function wack() {
//    if (ball.amount === 100) {
//        clearInterval(int)
//        let backInt = setInterval(ball.backward, 100)
//    }
//    if(ball.amount < 0) {
//        clearInterval(backInt)
//        setInterval(ball.forward, 100)
//    }
//
//}
















