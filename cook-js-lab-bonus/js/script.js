var upper = 10;/*NUMBER RANGE TO GUESS FROM*/
var randomNumber = getRandomNumber (upper)/*RETURNS RANDOM NUMBER*/
var guess = prompt();
// var attempts =0;

function getRandomNumber(upper) {
  return Math.floor(Math.random()* upper) + 1;

}

if( parseInt(guess) === randomNumber){
   document.write("Correct");
   }else if( randomNumber !== parseInt(guess)){
     document.write("No thats wrong");
   }


 

document.write("<p> The random number was: " + randomNumber + "</p>");


// if ( randomNumber < guess){
 //     document.write(" go up! ")
 //   }else if ( randomNumber > guess) {
 //     document.write(" go down! ")
 //   }

// while( guess !== randomNumber){
//   guess = getRandomNumber( upper);
//   attempts += 1;
// }


// document.write("<p> It took the computer " + attempts + " attempts to get it right </p>");