var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main);
var gameStates = []
var currentStates = 0
var gameOver = true
var pPoints = 0
var cPoints = 0
var message = "Please choose Rock, Paper, or Scissors"
var results = ""



var paper = new Image()
paper.src = 'Image/paper.png'

paper.onload = function () {
    main();
}

var paper2 = new Image()
paper2.src = 'Image/paper2.png'

paper2.onload = function () {
    main();
}

var rock = new Image()
rock.src = 'Image/rock.png'

rock.onload = function () {
    main();
}

var rock2 = new Image()
rock2.src = 'Image/rock2.png'

rock2.onload = function () {
    main();
}

var scissors = new Image()
scissors.src = 'Image/scissors.png'


scissors.onload = function () {
    main();
}

var scissors2 = new Image()
scissors2.src = 'Image/scissors2.png'


scissors2.onload = function () {
    main();
}

var p = paper
var r = rock
var s = scissors

var rps = []
rps[0] = "Rock"
rps[1] = "Paper"
rps[2] = "Scissors"

//Array of buttons
var btn = document.querySelectorAll('button')
//assighn event listeners to the buttons
btn[0].addEventListener('click', function (e) { playGame(0) })
btn[1].addEventListener('click', function (e) { playGame(1) })
btn[2].addEventListener('click', function (e) { playGame(2) })

function playGame(playerChoice) {
    //generate cpu choice
    var cpuChoice = Math.floor(Math.random() * 2.99)

    //example of switch case
    switch (playerChoice) {
        case 0:
            r = rock2
            p = paper
            s=scissors
            if (cpuChoice == 0) {
                // a tie
                showResults("Rock", "Rock", "It's a tie")

            }
            else if (cpuChoice == 1) {
                //cpu wins
                showResults("Rock", "Paper", "You Lose Computer wins")
            }
            else {
                //player 1 wins
                showResults("Rock", "Scissor", "You win Computers Lose")
            }
            break;
        case 1:
            r = rock
            p = paper2
            s=scissors
            if (cpuChoice == 0) {
                //Its a tie
                showResults("Paper", "Paper", "It's a tie")
            }
            else if (cpuChoice == 1) {
                //Player 1 loses
                showResults("Paper", "scissor", "You Lose Computer wins")
            }
            else {
                //Player 1 win
                showResults("paper", "Rock", "You win Computers Lose")
            }
            break;
        case 2:
            r = rock
            p = paper
            s=scissors2
            if (cpuChoice == 0) {
                //Player  1 loses
                showResults("siccors", "rock", "Player loses")
            }
            else if (cpuChoice == 1) {
                //Player 1 wins
                showResults("scissor", "Paper", "You win Computer Loses")
            }
            else {
                // tie 
                showResults("scissor", "Scissor", "Its a tie")
            }
            break;


    }


}

function showResults(pchoice, cchoice, result){
    message = "Player Chooses: " + pchoice + " Computer chooses: " + cchoice + "\n"  
    results = " Result: " + result
}

// setup keypresses
document.addEventListener("keydown", keyPressDown)
document.addEventListener("keyup", keyPressUp)

function keyPressDown(e) {
    console.log(e.keyCode)
}

function keyPressUp(e) {
    console.log(e.keyCode)
    if (gameOver == true) {
        if (e.keyCode == 32) {
            document.getElementById('btn').style.display = "block"
            changeState()
            main()
        }
    }
}

function changeState() {
    if (currentStates >= gameStates.length - 1) {

        currentStates = 0
    }
    else {
        currentStates++
    }
}
//States of our gameStates  States Machine
gameStates[0] = function () {

    ctx.fillStyle = "cyan"
    ctx.textAlign = "center"
    ctx.font = "30px Arial"
    ctx.fillText("Rock paper scissors", canvas.width / 2, canvas.height / 2 - 200)
    ctx.font = "15px Arial"
    ctx.fillText("Press Spacebar To Start ", canvas.width / 2, canvas.height / 2 - 150)
    
    
}

gameStates[1] = function () {
    gameOver = false

    ctx.fillStyle = "green"
    ctx.font = "25px Arial"
    ctx.fillText("player points:" + pPoints, 200, 100)

    ctx.fillStyle = "green"
    ctx.font = "25px Arial"
   
    ctx.fillText("cpu points:" + cPoints, 600, 100)
    ctx.fillStyle = "white"
    ctx.fillText(message, canvas.width / 2, canvas.height / 2 )
    ctx.fillText(results, canvas.width / 2, canvas.height / 2 +20)
    
    drawResults(p, r, s)





    //gameOver = true
   // currentStates++

}


//gameStates[2] = function () {
  //  ctx.fillStyle = "purple"
    //ctx.fillRect(0, 0, canvas.width, canvas.height)
    //ctx.fillStyle = "cyan"
    //ctx.textAlign = "center"
   // ctx.font = "30px Arial"
   // ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 30)
   // ctx.font = "15px Arial"
   // ctx.fillText("Press Spacebar for Main Menu ", canvas.width / 2, canvas.height / 2 + 15)

//}

function main() {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    gameStates[currentStates]()
    //call main function
    timer = requestAnimationFrame(main)

}

function drawResults(p, r, s){
    ctx.drawImage(p, 200, 520, 70, 60)
    ctx.drawImage(r, 400, 520, 70, 60)
    ctx.drawImage(s, 600, 520, 70, 60)
}