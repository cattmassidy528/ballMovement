

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




