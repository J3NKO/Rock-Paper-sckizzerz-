/* Task 1

let playerMove = "rock";
let computerMove = "scissors";

if (playerMove === computerMove) {

    console.log("Draw");

}else if (playerMove === "rock" && computerMove === "scissors") {

    console.log("Player Win");

}else if (playerMove === "scissors" && computerMove === "paper") {

    console.log("Player Win");

}else if (playerMove === "paper" && computerMove === "rock") {

    console.log("Player Win");

}else if (playerMove === "scissors" && computerMove === "rock") {

    console.log("Player Loss");

}else if (playerMove === "paper" && computerMove === "scissors") {

    console.log("Player Loss");

}else if (playerMove === "rock" && computerMove === "paper") {

    console.log("Player Loss");

}else {



}
*/

let Username = prompt("Enter your Name below");

function getWinner(UserInput, Computer) {


    if (UserInput === Computer) {

        return 0;
    
    }else if (UserInput === "rock" && Computer === "scissors") {
    
        return 1;
    
    }else if (UserInput === "scissors" && Computer === "paper") {
    
        return 1;
    
    }else if (UserInput === "paper" && Computer === "rock") {
    
        return 1;
    
    }else if (UserInput === "scissors" && Computer === "rock") {
    
        return -1
    
    }else if (UserInput === "paper" && Computer === "scissors") {
    
        return -1;
    
    }else if (UserInput === "rock" && Computer === "paper") {
    
       return -1;
    
    }else {
    
    
    
    }

  }
  
  let result = getWinner("rock", "paper");

  let input = prompt(`Please enter your move ${Username}: 'rock', 'paper' or 'scissors'...`);


  //task4 


  function random() {

    const x = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    const output = x[index];
    return output;

  }

  let CompOutput = random();
  let firstInput = getWinner(input, CompOutput);
  alert(getWinner(input, CompOutput));

  //task5 

  //ask user if they would like to continue playing
  let x = confirm(`Would you like keep playing ${Username}? `)
  
  let gamesPlayed = 1;
  let score = firstInput;


  while ( x === true ) {

    let input = prompt(`Please enter your move ${Username}: 'rock', 'paper' or 'scissors'...`);
    alert(getWinner(input, CompOutput));
    let y = getWinner(input, CompOutput);

    //score + games played
  
    gamesPlayed++;
    score += y;


    alert(`You have played ${gamesPlayed} games ${Username}`);
    alert(`Your score is: ${score}`);

    //exit game
    x = confirm(`Would you like keep playing? ${Username}`);

  }




