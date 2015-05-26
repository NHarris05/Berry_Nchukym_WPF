/**
 * Created by nchukymharris on 5/22/15.
 */


var result = totalStings(150,8.666666667);// assigned weight and bee stings to the arguments

function totalStings(pounds,beeStings){ //total bee stings hold the pounds and the amount of stings per pound
   var beeStings1 = pounds * beeStings; // var set to multiply the two arguments
    return beeStings1; // return the answer
}
console.log("It takes" + " " + result + " " + "bee stings to kill this animal" ); //printing the concatenated message to the console

