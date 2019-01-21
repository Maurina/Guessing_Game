let response = document.getElementById('myGuess').value;
console.log(response);
let guess = Number(response);
console.log (guess);
let answer = Math.floor((Math.random()*15)+1);
console.log(answer);
numberOfGuess = 0;


function guessingGame(){
   //let resposeGuess = document.querySelector('results')
    if (guess < 1 || guess > 15){
        document.getElementById('results').innerHTML = "You must enter a number between 1 and 15";
        //let outOfRange = document.createElement('p')
        //outOfRange.textContent = "You must enter a number between 1 and 15"
        //resposeGuess.appendChild(outOfRange)
     
      console.log("You must enter a number between 1 and 15");
      return;
    }
    else if (guess === answer){
        //let correct = document.createElement('p')
        //correct.textContent = "You are correct"
        //resposeGuess.appendChild(correct)
        document.getElementById('results').innerHTML = "You are correct";
            console.log("You are correct")
            switch(numberOfGuess){
                case 1:
                case 2:
                case 3:
                let awardImage = docuement.createElement("img");
                let imageSource = "images/blue.jpg";
                docuement.getElementById('Award').appendChild(awardImage);
                case 4:
                case 5:
                case 6:
                let awardImageRed = docuement.createElement("img");
                let imageSources = "images/red.jpg";
                docuement.getElementById('Award').appendChild(awardImage);
                default:
                let awardImageGold = docuement.createElement("img");
                let imgSource = "images/gold.jpg";
                docuement.getElementById('Award').appendChild(awardImage);
            }//end switch
            return;

           }
    else if (guess > answer){
      //  let answerHigh = document.createElement('p')
       // answerHigh.textContent = "Your guess is too high"
       // resposeGuess.appendChild(answerHigh)
       document.getElementById('results').innerHTML = "You are too high";

        console.log("You are high")
     
    }
    else {
        //let answerLow = document.createElement('p')
        //answerLow.textContent = "Your guess is too low"
        //resposeGuess.appendChild(answerLow)
        document.getElementById('results').innerHTML = "You are too low";
        console.log("You are low")
      
    }
    
    numbers();
    console.log(numbers)
    document.getElementById('tries').innerHTML = numbers;
}//end function

function numbers () {

    while (guess != answer){
        numberOfGuess = numberOfGuess+1;
    }
}//end numbers


