'use strict';

let isFirstPlayerTurn =true;
let currentScore=0;
let firstPlayerScore=0;
let secondPlayerScore=0;
document.querySelector('.btn--roll').addEventListener('click',()=>{
    let diceRoll=parseInt(Math.random()*6)+1;
    console.log("Button Clicked")
    if(isFirstPlayerTurn){
        
        currentScore+=diceRoll;
        switch(diceRoll){
            case 1:
                document.querySelector('.dice').src="dice-1.png";
                currentScore=0;
                isFirstPlayerTurn=false;
                break;
            case 2:
                document.querySelector('.dice').src="dice-2.png";
                break;
            case 3:
                document.querySelector('.dice').src="dice-3.png";
                break;
            case 4:
                document.querySelector('.dice').src="dice-4.png";
                break;
            case 5:
                document.querySelector('.dice').src="dice-5.png";
                break;
            case 6:
                document.querySelector('.dice').src="dice-6.png";
                break;
        }
       
        document.getElementById('current--0').textContent=currentScore;
        
    }
    else{
        currentScore+=diceRoll;
        switch(diceRoll){
            case 1:
                document.querySelector('.dice').src="dice-1.png";
                currentScore=0;
                isFirstPlayerTurn=true;
                break;
            case 2:
                document.querySelector('.dice').src="dice-2.png";
                break;
            case 3:
                document.querySelector('.dice').src="dice-3.png";
                break;
            case 4:
                document.querySelector('.dice').src="dice-4.png";
                break;
            case 5:
                document.querySelector('.dice').src="dice-5.png";
                break;
            case 6:
                document.querySelector('.dice').src="dice-6.png";
                break;
        }
       
        document.getElementById('current--1').textContent=currentScore;
    }
});


document.querySelector('.btn--hold').addEventListener('click',()=>{
        if(isFirstPlayerTurn){
        firstPlayerScore+=currentScore;
        document.getElementById('score--0').textContent=firstPlayerScore;
        document.getElementById('current--0').textContent=0;
        isFirstPlayerTurn=false;
        }    
        else{
        secondPlayerScore+=currentScore;
        document.getElementById('score--1').textContent=secondPlayerScore;
        document.getElementById('current--1').textContent=0;
        
        isFirstPlayerTurn=true;
        }
        currentScore=0;
        if(firstPlayerScore>=100){
            document.querySelector('.dice').src="";
            document.querySelector('.dice').alt="Winner-1";         
            document.querySelector('.btn--hold').disabled=true;
            document.querySelector('.btn--roll').disabled=true;

        }
        else if(secondPlayerScore>=100){
            document.querySelector('.dice').src="";
            document.querySelector('.dice').alt="Winner-2";   
            document.querySelector('.btn--hold').disabled=true;
            document.querySelector('.btn--roll').disabled=true;  
        }       
});