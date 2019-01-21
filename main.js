let guess = 8;
// document.getElementById('myGuess').value;
console.log (guess);
let answer = Math.floor((Math.random()*15)+1);
console.log(answer);
numberOfGuess = 0;


function guessingGame(){
    if (guess < 1 || guess > 15){
      //document.getElementById('results').innerHTML = "You must enter a number beween 1 and 15";
      console.log("You must enter a number between 1 and 15");
      return;
    }
    else if (guess === answer){
       //document.getElementById('results').innerHTML = "You are correct";
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
     //document.getElementById('results').innerHTML = "Your guess is too high";
        console.log("You are high")
     
    }
    else {
     //document.getElementById('results').innerHTML = "Your guess is too low";
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


