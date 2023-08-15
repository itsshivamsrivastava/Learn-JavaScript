// Create Snake, Water & Gun game in JavaScript.
// The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert
// Use alert, prompt and confirm whereever required!

// Solution

//All characters
let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Generate random numbers
let randomNumber = Math.round(Math.random() * 26);

// Convert randomNumber into Random letter
let computerChoice = character.charAt(randomNumber);
console.log(computerChoice);
let start = true;

// console.log(userchoice);
count = 0;
while (count <= 10) {
    alert(" S for Snake\n W for Water\n G for Gun");
    let userchoice = prompt("What is your choice b/w S, W, and G?\n").toUpperCase();
    if (userchoice == computerChoice) {
        alert(`It's tie...\nYou choose: ${userchoice}\nComputer Choose: ${computerChoice}`);
        count++;
    }
    else if (userchoice == 'S' && computerChoice == 'G') {
        alert(`You choose: ${userchoice}\nComputer Choose: ${computerChoice}\nYou Loose! Computer Win`);
        count++;
    }
    else if (userchoice == 'G' && computerChoice == 'S') {
        alert(`You choose: ${userchoice}\nComputer Choose: ${computerChoice}\nYou win! Computer Loose!`);
        count++;
    }
    else if (userchoice == 'S' && computerChoice == 'W') {
        alert(`You choose: ${userchoice}\nComputer Choose: ${computerChoice}\nYou Loose! Computer Win!`);
        count++;
    }
    else if (userchoice == 'W' && computerChoice == 'S') {
        alert(`You choose: ${userchoice}\nComputer Choose: ${computerChoice}\nYou win! Computer Loose!`);
        count++;
    }
    else if (userchoice == 'G' && computerChoice == 'W') {
        alert(`You choose: ${userchoice}\nComputer Choose: ${computerChoice}\nYou Loose! Computer Win!`);
        count++;
    }
    else if (userchoice == 'W' && computerChoice == 'G') {
        alert(`You choose: ${userchoice}\nComputer Choose: ${computerChoice}\nYou win! Computer Loose!`);
        count++;
    }
    else {
        alert(`Your input is invalid! Please try again...`);
    }
}