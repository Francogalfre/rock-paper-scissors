// Score
let [computer_score, user_score] = [0, 0];

let result_reft = document.getElementById("result")
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
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random() * 3);

    // Computer move
    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span>${choices[num].toUpperCase()}</span>; ` 

    // Player move
    document.getElementById("user_choice").innerHTML = 
    ` You choose <span>${input.toUpperCase()}</span>` 

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]) {
        case 'win':
            result_reft.style.cssText = "background-color: #cefdce; color: #689f38"
            result_reft.innerHTML = "YOU WIN!";
            user_score++
            break;
        case 'lose':
            result_reft.style.cssText = "background-color: #ffdde0; color: #d32f2f"
            result_reft.innerHTML = "YOU LOSE";
            computer_score++
            break;
        default:
            result_reft.style.cssText = "background-color: #e5e5e5; color: #808080"
            result_reft.innerHTML ="DRAW";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}