//control flow statements



//switch case

let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}

//early return pattern

function checkAge(age){
    if(age < 18){
        console.log("Access Denied");
        return;
    }
    console.log("Access Granted");
}

//function to grade score
function gradeScore(score){
    if(score >= 90 && score <= 100){
        return 'A+';
    } else if(score >= 80 && score < 90){
        return 'A';
    } else if(score >= 70 && score < 80){
        return 'B';
    } else if(score >= 60 && score < 70){
        return 'C';
    } else if (score > 32 && score < 60 ){
    }
    else {
        return 'F';
    }
}


//rock paper scissors game.
function rps(player1, player2){
    if(player1 === player2){
        return "It's a Tie!";
    }
    if((player1 === 'rock' && player2 === 'scissors') ||
       (player1 === 'scissors' && player2 === 'paper') ||
       (player1 === 'paper' && player2 === 'rock')){
        return "Player 1 Wins!";    
    } else {
        return "Player 2 Wins!";
    }
}