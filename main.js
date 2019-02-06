// random number between 1 and 15
let answer = Math.floor((Math.random()*15)+1);
console.log(answer);


let guess;


  

function guessingGame(){
 //input guess from user------------------------------------------
    guess = document.getElementById('myGuess').value;
    let numberOfGuess = 0;
    console.log (guess);
// check if input is between 1-15---------------------------------
    if (guess < 1 || guess > 15){
        document.getElementById('results').innerHTML = "You must enter a number between 1 and 15";
     console.log("You must enter a number between 1 and 15");
     
    }//end check


//correct answer-------------------------------------------------    
        else if (guess == answer){
        document.getElementById('results').innerHTML = "You are correct";
//add to number of guesses        
       numberOfGuess++;
        document.getElementById('tries').innerHTML = `Tries: ${numberOfGuess}`;
        console.log(numberOfGuess);
            console.log("You are correct")
//awards depending on the number of guesses-----------------------         
            switch(numberOfGuess){
                case 1:
                case 2:
                case 3:
                let awardImage = document.createElement("img")
                awardImage.src ="images/red.png";
                 document.getElementById('Award').appendChild(awardImage);
                 break;
                case 4:
                case 5:
                case 6:
                let awardImageBlue = document.createElement("img");
                awardImageBlue.src = "images/blue.png"
                document.getElementById('Award').appendChild(awardImageBlue);
                break;
                default:
                let awardImageGold = document.createElement("img");
                awardImageGold.scr  = "images/gold.png";
                document.getElementById('Award').appendChild(awardImageGold);
            }//end switch
        

           }
//guess is too high
        else if (guess > answer){
        document.getElementById('results').innerHTML = "You are too high";
//add to number of guesses  
        numberOfGuess++;
        document.getElementById('tries').innerHTML =  `Tries: ${numberOfGuess}`;
        console.log(numberOfGuess);
        console.log("You are high")
     
    }
// guess is too low    
        else {
        document.getElementById('results').innerHTML = "You are too low";
//add to number of guesses  
        numberOfGuess++;
        document.getElementById('tries').innerHTML =  `Tries: ${numberOfGuess}`;
        console.log(numberOfGuess);
        console.log("You are low")
      
        }

}//end function


