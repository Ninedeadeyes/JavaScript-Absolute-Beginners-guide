   
/* At a basic level, a function nothing more than a wrapper for some code

A function basically 1) Group statements together  2) Make your code reusable

*/

function showDistance(speed,time){
    alert(speed*time);                    // Just defining a function isn't enough 
}

showDistance(10,5);   // functions need to be called (invoked) 
showDistance(12,9);


/* The 'function' keyword tells the JavaScript engine to treat the entire block of codes
as something having to do with functions. After we specify the actual name of the function.
We will add any Parameters for the function within two parenthese.Rounding out our function 
declaration are the opening/closing brackets that enclose any statements that we may have 
inside and the final thing is the content of the function.

The above function takes two Arguments eg: 10,5  whilst speed, time  are the parameters. 

A Parameter is the variable listed inside the parentheses in the function definition.

An Argument is the value that is sent to the function when it is called    */

/* Creating a Function that Returns Data 

Instead of having our showDistance function calculate the distance and display 
it as an alert, we want to store that value for some future use. The myDistance variable 
will store the result of the calculation of showDistance */

let myDistance=showDistance(10,5);

// The way you return data from a function is by using the return keyword

function getDistance(speed,time){
    let distance =speed*time;
    return distance;
}

myDistance=getDistance(10,5);

if (myDistance>40){
    alert("That is great")
}

else{
    alert("Sorry try again")
}


// When the getDistance get called, it get evaulated and returns a numerical value 
// that then becomes assigned to the myDistance variable.  You can then pass this 
// numerical value forward to extract further information. 


// Exiting the functions Early 

// Once our function hit the return keyword, it stops everything it is doing at
// the point, returns whatever value you specified and exits. Any code that 
// exists after our return statement will not get reached. 

// In practise, we will use the return statement to terminate a function after 
// it has done what we wanted to do

// Using the return keyword to return a value is optional. The return keyword
//can be used standalone like we see here to just exit the function

function doNothing(){
    let foo=("Nothing interesting");
    alert (foo)
    return;

    if (foo =="Nothing interesting"){
        alert("Never going to show")

    }
    
}

let doSomething=doNothing();

// If you do not use the 'return sign' this will happen 


function dist1(speed,distance){
        
        distance=(speed*distance)

        return distance;
    }

function dist2(speed,distance){
        
        distance=(speed*distance)

    }


let bob=dist1(10,20);

alert(bob+10);


let job=dist2(10,20);

alert(job+10);

// bob function  will provide a numerical value when alerted but
// job will provide NAN ( NOT A NUMBER )