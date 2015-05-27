/**
 * Created by nchukymharris on 5/27/15.
 * sec 02
 * YouTube Earnings
 */

 prompt("How Many YouTube Videos Do You Make Each Week?");//The first user prompt,I will input 10.
//var i set for videos
 prompt ("How Many viewers Does your Channel Have A Day?"); // The second user prompt will instruct the user to input the amount of views their channel has. I will input 13,423
// var v is set for viewers


//revenueEstimate(10, 13423); //revenueEstimate is set to hold the videos made and subscribers.

   function revenueEstimate (i){ //main function is going to output the information
       var revenue = i * 13423; //the viewers and subscribers are going to be multiplied to work with the next part which will calculate the estimated earnings.
    //I got  134230  as a result after I input 10 in the user prompt
     console.log(revenue);
   }
revenueEstimate(20);//answer was 268460 after passing
revenueEstimate(15);// answer was 201345 after passing/ also checked on my calculator

 monthlyEarnings(134230,.25,2.80);

function monthlyEarnings(v,cpm,budget) {
    var estimateEarnings = (v * cpm / budget);// I got 11984.82142857143 for a result
    console.log("Your Estimated Monthly YouTube Earnings is" + " " + estimateEarnings);

}


var total = realEarnings(62,11984.82);  //the number of subscribers and the rounded estimateEarnings stored here

  function realEarnings(s,estimate) {    //I set short parameters for the two
         var totalCheck = s / estimate;    //divide them both and I got 193.303548387.... then round it off to 193.00
         return totalCheck;
  }
console.log(total);   // the total printed back 193.303548387-- which I rounded off to 193.00. This is the month
// ly estimate earnings.






