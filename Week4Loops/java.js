/**
 * Created by nchukymharris on 5/26/15.
 */

//* loops *//

var b = 10; //sets the index
while (b > 0){//checks the condition
    console.log(b + ' kegs on the wall');
    b--; //increments or decrements the index
}
console.log('-------- Do While Loops------------------');

var c = 10;

 do{
    console.log(c + 'kegs on the wall');
    c--;
}
 while(c > 0);

for(var i = 10; i > 0; i--);{
    console.log(i + 'kegs on the wall');
}
