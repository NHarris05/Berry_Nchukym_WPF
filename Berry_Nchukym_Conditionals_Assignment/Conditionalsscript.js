/**
 * Created by nchukymharris on 5/11/15.
 */
// sec-02
//Conditionals assignment.... Growing carrots and onions


var growCarrot = prompt("How Many Carrot Seeds Did You Plant?"); // The first prompt will have the user input the amount of carrot seeds they planted this spring
var growOnion = prompt ("How Many Onion Seeds Did You Plant?"); // This prompt will ask for the amount of onion seed the user planted this spring
  console.log(Number(growCarrot) + Number(growOnion)); //The result will print in the console as a casted number. Because the numbers for each were 50 and 50, the result without casting would have been 5050 as the amount of seeds total planted
var width = 25;
var length = 72;
//Now that I have the number of seeds planted, what I will do next is created two variables which will determine when the reaping will happen based on when the seeds were sown.
//The length and width will determine how far apart the seeds will be from each other.
var month = "april";
var season = "summer";
var plantedSeeds = false;

if(month ){
    console.log("You Should Expect a Harvest In" + " " + [30 -1 + 75] +" " + "Days From Now" ); //If the user planted their seed in april during the beginning of the month, then the console will print out an estimated time... exact days until the harvesting time
  alert();
}else{
  console.log("You should expect a early September/ late October harvest"); //if they planted the seeds in the summer months/ june than they will see a message that they should expect a harvest in the beginning of September/ late October
}
if(season){
    console.log("Your harvest will be ready on September 15th");// This is the time the user will be able to pick their harvest if they planted their crop in june.

}else if(plantedSeeds){
    console.log("Better luck next year!"); //The message the user will see if they just did not plant anything until after june. This is assuming they live in NY, and with the weather here, harvesting a good and consumable crop in dec or any of the cold months is close to impossible. The soil lacks fertility enough in the hot seasons.
}else{
      console.log("Better Luck next year!");
}


