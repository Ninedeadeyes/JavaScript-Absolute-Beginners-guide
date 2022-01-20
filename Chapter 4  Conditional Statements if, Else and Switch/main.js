/* IF/Else Statement 

The way this statement is work is shown below

if (something_is_true){
    do_soemthing;
}
else{
    do_something_different;
}

A working example 

*/

let safeToProceed=true;             //expression    (evaluates to a value)

if (safeToProceed){                 //statement  (performs an action.)
    alert("You shall pass");       
}
else{
    alert("you shall not pass");   
}

// If you change variable to "False", it will change alert "you shall not pass"
// Our expression (a snippet of code that evaluates to a value) is the variable "safeToProceed"


/* Meet the Conditional Operators 

In most cases, our expression will rarely bea simple variable that is set to true or false. 
The general format is 

If (expression operator expression){
    do_something;
}

else{
    do_something_different;
}

The operator (conditional operator) defines a relationship between an expression.
 The end goal is to return a true or a false so that our if statement knows which 
 block of code to execute. 
 
 */

let speedLimit=55;

 function amISpeeding(speed){
     if (speed>=speedLimit){
         alert("Yes, you are speeding");
     }

     else{
         alert("No, you are not ")
     }

 }

 amISpeeding(100);
 amISpeeding(40);

 //Creating more Complex Expression eg:

 let xPos=300;
 let yPos=400;

 function finalWarning(x,y){
     if ((x<xPos) && (y<yPos)){
         alert("Adjust the position");
     }
     else{
         alert("Things are fine");
     }

 }

finalWarning(400,100);
finalWarning(200,300);

/* Variation on the if/else statement 

The If only statement : If the expression evulate to a 'true' then  the code will be 
be executed but if not it will just be ignore and move on to the next line of code. 

if (position<100){
    alert("Do something");
}

alert ("next line of code")

// The dreaded if/Else if /Else Statement : Not everything will fit neatly between if and 
// if not 

if (position<100){
    alert("Do something");
}

else if (position>=200){
    alert("Do something else");
}
else{
    alert ("Do something even more differnt");
}

If the first statement evaulates to true, then our code branches into the first alert, if the
if statement is false, then our code evaulates the else if statement to if the expressions
evaluate to a true or false. This repeat until the end of the code. If all expression evaulate 
to a false then else will be executed. 

 Switch Statement : not particularly important but will provide an example. Basically another 
 way of dealing with conditions

 switch(expression){
     case value1:
         statement;
         break;
     case value2:
         statement;
         break;
     case value3:
         statement;
         break;
     default :
         statement;
         break;`   
 }

 */

 let color="green";

 switch(color){
     case "yellow":
         alert("yellow color");
         break;
     case "green":
         alert("green color");
         break;
     default:
        alert("no known color specified");
        break;
 }

 if (color=="yellow"){
     alert("yellow color")
 }

 else if (color=="green"){
     alert("green color")
 }

 else{
    alert("no known color specified");
 }

 // Deciding which to use : If you have alot of conditions, switch tend to look cleaner 
 // but you can involve more complex conditions with if else statements. Use the one you prefer 