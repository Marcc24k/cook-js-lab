    //THIS FUNCTION CONVERTS FEHRINHEIT TO CELSIUS
function convert() {
    var tempOutside = prompt("Whats the temp?");
    var cel = (tempOutside - 32) * 5 / 9;

    //document.write( " The temperature today is " + cel++ + " celsius ");

//    var output = document.getElementById("temps").innerHTML = (" The temperature today is " + cel++ + "° celsius");
//    document.getElementById("temps").style.color = "gray";
    
    //THIS STATEMENT CHANGES THE COLOR OF THE TEXT DEPENDING ON THE TEMPERATURE
//if( tempOutside <= 40 ){
//     document.getElementById("temps").style.color = "dodgerblue";
//}else if( tempOutside >= 40 )
//     document.getElementById("temps").style.color = "darkred";


//THIS STATEMENT WILL TELL YOU WHAT TO WEAR DEPENDING ON THE WEATHER

if( tempOutside < 54 ){
     document.getElementById("outfit").innerHTML = " HAl say's: its " + cel++ +
        "° cesius" + " outside today, you might want to wear a coat";
}else if( tempOutside <= 54 && tempOutside <= 60  ){
     document.getElementById("outfit").innerHTML = " HAl say's: its " + cel++ +
        "° cesius" + " outside today, I think a pullover should be fine today";
}else if( tempOutside >= 70  ){
      document.getElementById("outfit").innerHTML = " HAl say's: its " + cel++ +
        "° celsius" + " so shorts and a t-shirt should be fine";
}else if( tempOutside >= 100){
      document.getElementById("outfit").innerHTML = " HAl say's: its " + cel++ +
        "° celsius" + " you will most likely be burned alive if you exit the building, good luck! ";
}  
  
  

    
    
if( tempOutside < 54 ){
     document.getElementById("outfit").style.color = "dodgerblue";
}else if( tempOutside <= 54  ){
     document.getElementById("outfit").style.color = "darkblue";
}else if(tempOutside >= 70 ){
     document.getElementById("outfit").style.color = "darkred";
}



}




convert();



// WRITE AN IF STATEMENT SAYING: IF TEMPOUTSIDE IS LESS THAN 40degs MAKE FONT ICE BLUE ELSE IF TEMPOUTSIDE IS GREATER THAN 40deg THAN COLOR FONT RED