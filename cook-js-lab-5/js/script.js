function convertTemp( deg, unit){
if( unit === "C"){
  return  ( 5/9 ) * (deg - 32);
}else if( unit ==="F"){
  return( 9/5  * deg) + 32;
}
}
  // var tempConvert = convertTemp( 212, "C" );
 var tempConvert = convertTemp( 212, "C" );
  tempConvertB = convertTemp( 32, "C" );
  tempConvertC = convertTemp( 65, "C" );
  tempConvertD = convertTemp( -40, "F" );

  console.log(tempConvert, tempConvertB, tempConvertC, tempConvertD);
