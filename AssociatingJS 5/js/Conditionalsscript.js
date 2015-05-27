/**
 * Created by nchukymharris on 5/11/15.
 */
// sec-02
//Conditionals assignment.... Growing carrots and onions



//this part of the calculator will determine the area of the raised bed. This will be a factor in how far the seeds should be spread apart

var width = prompt ("Enter Your Raised Bed Width");
var length = prompt ("Enter Your Raised Bed Length");
 var area = width * length;
console.log(area + " " + "square feet");
alert("The Area of Your \n Raised Bed Is" +  " " + area + "sq ft");
//The alert to communicate with the user of what the area is.. a string of text with the area result.
var raisedBed = true;

//printing to the console the area of the rectangle plus the concatenated string for unit

if(width === length){
    console.log( "You should plant the crop" + 1800 / 9 + "Inches Apart");
//If the width is = to length, the crop should be planted 1800/ 9 inches apart.
}else{
    console.log("You should plant the crop" + 300 * 6 / 1800  + "Inches Apart");
}
//otherwise, it should be planted  closer.

if (area >= width || raisedBed){
     console.log("You Are All Set To Plant Your Crops!");
//if the area is greater than the width, and the whole statment is true, than the user is ready to plant their crops.
}else{
    console.log("You May Need To Adjust Your Measurements");
    //if not, they need to re-calculate their raised bed measurements

}
( raisedBed > area)? console.log("Happy Planting!") : console.log("Try Again Next Year");
//if the raised bed is greater than the area than a message will pop up Happy Planting.. the alternative will be to try again next year.



//Now that I have the number of seeds planted, what I will do next is created two variables which will determine when the reaping will happen based on when the seeds were sown.
//The length and width will determine how far apart the seeds will be from each other.


var growCarrot = prompt("How Many Carrot Seeds Did You Plant?"); // The first prompt will have the user input the amount of carrot seeds they planted this spring
var growOnion = prompt ("How Many Onion Seeds Did You Plant?"); // This prompt will ask for the amount of onion seed the user planted this spring
console.log(Number(growCarrot) + Number(growOnion)); //The result will print in the console as a casted number. Because the numbers for each were 50 and 50, the result without casting would have been 5050 as the amount of seeds total planted

var month = "april";
var season = "summer";
var plantedSeeds = false;

if(month){
    console.log("You Should Expect a Harvest In" + " " + [30 -1 + 75] +" " + "Days From Now" ); //If the user planted their seed in april during the beginning of the month, then the console will print out an estimated time... exact days until the harvesting time
//if the month is true, than the user will subtract one day from the month (the day they planted the seeds) then add 75 days which will render the date the crop can be expected
}else{
  console.log("You should expect a early September/ late October harvest"); //if they planted the seeds in the summer months/ june than they will see a message that they should expect a harvest in the beginning of September/ late October
//otherwise, the date will be pushed back
}if(season !== plantedSeeds){
    console.log("You Wont See any Crop This Year!");// This is the time the user will be able to pick their harvest if they planted their crop in june.
//if the season is not equal to  the seeds being planted, there will be no crop this year.
}else if(plantedSeeds){
    console.log("Better luck next year!"); //The message the user will see if they just did not plant anything until after june. This is assuming they live in NY, and with the weather here, harvesting a good and consumable crop in dec or any of the cold months is close to impossible. The soil lacks fertility enough in the hot seasons.
}else{
      console.log("Better Luck next year!");
}


