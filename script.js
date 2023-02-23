'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20; //State Variable -- all data that is relevant to application
let highscore=0;

//Refactoring repeated functions
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}


document.querySelector('.check').addEventListener('click',function(){
    let guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //When there is no input
    if(!guess){
        //document.querySelector('.message').textContent='No number!'
        displayMessage('No number!');
    }

    //When Player wins
    else if(guess===secretNumber){
        document.querySelector('.number').textContent=secretNumber;
        //document.querySelector('.message').textContent="Correct Number!";
        displayMessage('Correct Number!');
        score++;
        document.querySelector('.score').textContent=score;
        /* Apply winning effect to the background and number */
        document.querySelector('body').style.backgroundColor="#60b347 ";
        document.querySelector('.number').style.width="30rem";

        /*  High score */
        if(score > highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

    }
   // Refactoring implementando ternary operator para mostrar 2 opciones en la misma linea 
   // y no tener que duplicar el codigó
    else if(guess !== secretNumber){
        if(score>1){
            //document.querySelector('.message').textContent= guess > secretNumber ? 'Too High' : 'Too Low';
            displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            score=0;
            document.querySelector('.score').textContent=score;
            //document.querySelector('.message').textContent="You lost the Game!!";
            displayMessage('You lost the Game!!');
        }
    }

    //When number is too high
    // else if(guess > secretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent="Too High";
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }else{
    //         score=0;
    //         document.querySelector('.score').textContent=score;
    //         document.querySelector('.message').textContent="You lost the Game!!";
    //     }
    // }

    //When number is too low
    // else if(guess < secretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent="Too Low";
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }else{
    //         score=0;
    //         document.querySelector('.score').textContent=score;
    //         document.querySelector('.message').textContent="You lost the Game!!";
    //     }
    // }


})

// Reset functionality
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor="#222 ";
    document.querySelector('.number').style.width="15rem";
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').value='';
}) 


