/**
 * Created by nchukymharris on 5/27/15.
 */

 prompt("How Many YouTube Subscribers Do You Have?");//The first user prompt,I will input 62.
//var i set for subscribers
 prompt ("How Many viewers Does your Channel Have?"); // The second user prompt will instruct the user to input the amount of views their channel has. I will input 13,423
// var v is set for viewers


revenueEstimate(62, 13423); //revenueEstimate is set to hold the viewers and subcribers

   function revenueEstimate (i,v){ //main function is going to output the information
       var revenue = i / v; //the viewers and subscribers are going to be divided to work with the next part which will calculate the estimated earnings.
     console.log(revenue);
   }

