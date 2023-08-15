// Create Snake, Water & Gun game in JavaScript.
// The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert
// Use alert, prompt and confirm whereever required!

// Solution

//All characters
let character = "SWG";
 function randomLetterGenerator(){
    // Generate random numbers
    let randomNumber = Math.round(Math.random() * 3);
    
    // Convert randomNumber into Random letter
    let randomLetter = character.charAt(randomNumber);
    return randomLetter;
 }

//  console.log(` Computer Input: ${computerChoice}`);

count = 0;
while (count <= 5) {
    console.log("S for Snake\nW for Water\nG for Gun");
    
    computerChoice = randomLetterGenerator();

    let userchoice = prompt("What is your choice b/w S, W, and G?\n").toUpperCase();
    console.log(` User Input: ${userchoice}`);

    

    if (userchoice == computerChoice) {
        console.log(`It's tie...\nYou choose: ${userchoice}\nComputer Choose: ${computerChoice}`);
        count++;
    }
    else if (userchoice == 'S' && computerChoice == 'G') {
        console.log(`You choose: ${userchoice}\nComputer Choose: ${computerChoice}\nYou Loose! Computer Win`);
        count++;
    }
    else if (userchoice == 'G' && computerChoice == 'S') {
        console.log(`You choose: ${userchoice}\nComputer Choose: ${computerChoice}\nYou win! Computer Loose!`);
        count++;
    }
    else if (userchoice == 'S' && computerChoice == 'W') {
        console.log(`You choose: ${userchoice}\nComputer Choose: ${computerChoice}\nYou Loose! Computer Win!`);
        count++;
    }
    else if (userchoice == 'W' && computerChoice == 'S') {
        console.log(`You choose: ${userchoice}\nComputer Choose: ${computerChoice}\nYou win! Computer Loose!`);
        count++;
    }
    else if (userchoice == 'G' && computerChoice == 'W') {
        console.log(`You choose: ${userchoice}\nComputer Choose: ${computerChoice}\nYou Loose! Computer Win!`);
        count++;
    }
    else if (userchoice == 'W' && computerChoice == 'G') {
        console.log(`You choose: ${userchoice}\nComputer Choose: ${computerChoice}\nYou win! Computer Loose!`);
        count++;
    }
    else {
        console.log(`Your input is invalid! Please try again...`);
    }
}