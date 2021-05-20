//Array of choices
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
    switch (playerChoice){
        case 0:
            if (cpuChoice == 0){
                //its a tie
                showResults("Rock", "Rock", "It's a tie")
            }
            else if (cpuChoice == 1){
                //computer wins
                showResults("Rock", "Paper", "You Lose Computer wins")
            }
            else{
                //player wins
                showResults("Rock", "Scissor", "You win Computers Lose")
            }
            break;
        case 1:
            if(cpuChoice == 0){
                //Its a tie
                showResults("Paper", "Paper", "It's a tie")
            }
            else if (cpuChoice == 1){
                //Player loses
                showResults("Paper", "scissor", "You Lose Computer wins")
            }
            else{
                //Player win
                showResults("paper", "Rock", "You win Computers Lose")
            }
            break;
        case 2:
            if (cpuChoice == 0){
                //Player loses
                showResults("siccors", "rock", "Player loses")
            }
            else if (cpuChoice == 1){
                //Player wins
                showResults("scissor", "Paper", "You win Computer Loses")
            }
            else{
                //Its a tie 
                showResults("scissor", "Scissor", "Its a tie")
            }
            break;


    }
    function showResults(pChoice, cChoice, result) {
        document.getElementById("pChoice").innerHTML = pChoice
        document.getElementById("cChoice").innerHTML = cChoice
        document.getElementById("result").innerHTML = result
    }
}