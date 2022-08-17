// Score
let computer_score = localStorage.getItem("computer_score") || 0;
let user_score = localStorage.getItem("user_score") || 0;

// Reset Button
let reset_btn = document.getElementById("reset-btn");

// Reset the game
reset_btn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
}) 

//  Initialize the scores
document.getElementById("computer_score").innerHTML =
    ` ${computer_score} `

document.getElementById("user_score").innerHTML =
    ` ${user_score} `

// Local Storage to keep score
localStorage.setItem("computer_score", computer_score);
localStorage.setItem("user_score", user_score);

let result_reft = document.getElementById("result")

// Object of choices
let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }
}

// Generate random computer moves
function checker(input) {
    var choices = ["rock", "paper", "scissor"]; // Array of choices
    var num = Math.floor(Math.random() * 3); 

    // Computer move
    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span>${choices[num].toUpperCase()}</span>; ` 

    // Player move
    document.getElementById("user_choice").innerHTML = 
    ` You choose <span>${input.toUpperCase()}</span>`

    let computer_choice = choices[num];

    // Game Logic
    switch(choices_object[input][computer_choice]) {
        // Win
        case 'win':
            result_reft.style.cssText = "background-color: #cefdce; color: #689f38"
            result_reft.innerHTML = "YOU WIN!";
            user_score++

            // Local Storage User Score
            localStorage.setItem("user_score", user_score);

            break;
        // Lose
        case 'lose':
            result_reft.style.cssText = "background-color: #ffdde0; color: #d32f2f"
            result_reft.innerHTML = "YOU LOSE";
            computer_score++

            // Local Storage User Score
            localStorage.setItem("computer_score", computer_score);

            break;
        // Draw
        default:
            result_reft.style.cssText = "background-color: #e5e5e5; color: #808080"
            result_reft.innerHTML ="DRAW";
            break;
    }

    // Scores HTML
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}
