/**
 * Created by nchukymharris on 5/27/15.
 * sec 02
 * YouTube Earnings
 */

 prompt("How Many YouTube Videos Do You Make Each Week?");//The first user prompt,I will input 10.
//var i set for videos
 var i = 10;

while(i +10){    //if 10 is less than 20 than print to the console 10.
    console.log(i + 'Your Video!!');
    i--;
}


prompt ("How Many viewers Does your Channel Have A Day?"); // The second user prompt will instruct the user to input the amount of views their channel has. I will input 13,423
// var v is set for viewers

 var v = 13423;  //the amount of views
while (v > 4100){   //is v is greater than 4100 than print v
        console.log(v + 'How many Viewers Do You Have?');
         v--;       //decrement the message
}


prompt ("How Many Subscribers Do You Have?");   //Test value was 62
  //var s is set for subscribers
var s = 62;
while(s >2){     //if s is greater than 2 print out 6 which is 62
     console.log(s + 'DO You Have' + s + 'Subscribers?');
    s--;
}

//revenueEstimate(10, 13423); //revenueEstimate is set to hold the videos made and subscribers.

   function revenueEstimate(i) {
       //*main function is going to output the information *//
    var r = i * 13423; //*the viewers  which is i/ intitially I added 10 and subscribers are going to be multiplied to work with the next part which will calculate the estimated earnings.  *//
    //*I got  134230  as a result after I input 10 in the user prompt  *//
     return r;
   }
console.log(revenueEstimate(20) + " Is Estimated If You Had 20 Videos");//answer was 268460 after passing
console.log(revenueEstimate(15) + "Is Estimated If You Had 15 Videos");// answer was 201345 after passing/ also checked on my calculator



monthlyEarnings(134230,.25,2.80);

 function monthlyEarnings(v,cpm,budget) {  //video cost  per  thousand views and advertising budget
    var estimateEarnings = (v * cpm / budget);// I got 11984.82142857143 for a result
    console.log("Your Estimated Monthly YouTube Earnings is" + " " + estimateEarnings);

}


 var total = realEarnings(11984.82,62);  //the number of subscribers and the rounded estimateEarnings stored here

  function realEarnings(estimate,s) {    //I set short parameters for the two
         var totalCheck = estimate / s;    //divide them both and I got 193.303548387.... then round it off to 193.00
         return totalCheck;
  }
console.log(total + " Is What Should Expect Each Month From YouTube");   // the total printed back 193.303548387-- which I rounded off to 193.00. This is the month
// ly estimate earnings


var weeklyEarnings = function(days,earnings){   //this is going to determine how much money is made each week
           var total = earnings / days;      //take the total amount of earnings and divide that by 7 days a week
           return total;       // the total amount is    27.5714285714 which can then be rounded to 28.00

}

var $ = weeklyEarnings(7,193);     // invoked the earnings
console.log($ + "Is What You Should Expect Each Week From YouTube");    //printed the result to the console which was rounded to 28.00 a week



