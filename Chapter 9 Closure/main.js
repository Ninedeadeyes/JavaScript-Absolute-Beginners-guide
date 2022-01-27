

// Closure: This touch upon a gray area where functions and variable scopes intersect 

/* When you have a function defined inside of another function, the inner function 
has access to the variables/scope of the outer function even if the outer function
finishing executing and the variable is no longer accessible outside that function   
*/

function youSayGoodBye(){

    alert("Good Bye!");
    
    function andISayHello(){}
    alert("Hello");

    return andISayHello;
}

//youSayGoodBye();  This will invoke both alerts inner and outer function 

let something=youSayGoodBye();  // invoke outer function 

something();   // invoke inner function 

//something=youSayGoodBye();  //invoke outer function 

//something();   //inner function 


/* Once let something gets invoked all of the code inside your youSayGoodBye function runs meaning 
 you will see 'Good Bye'. As part of running to completion the 'andISayHello' function will
 be created and then returned as well. At this point our something variable only has eyes for 
/ne thing, and that thing is the andISayHello function (Inner function)

 The youSayGoodBye outer function from the something variable's point of view simply goes 
 away, because the 'something' variable now points to a function.  You can just invoke the 
 function by using open and close parentheses like your normally would.  

Note: Once a function returns a value, it is no longer around. The only thing that 
remains is the returned value. 
*/

// When the inner function aren't self contained 


function stopWatch(){
    let startTime=Date.now();
    alert("start");
    
    function getDelay(){
        let elapsedTime=Date.now()-startTime;
        alert("finish: "+elapsedTime);

    }
    return getDelay;


}

let timer=stopWatch();

for (let i=1; i<100000;i++){
    let foo=Math.random()*100;

}

timer();

/* As you can see the inner function has used the outer function variable 'startTime' 
 even after the outer function has finished executing.  The Stopwatch outer function
 is no longer in play and the timer variable is bound to the getDelay function. 

 Why does this work ??

 The JavaScript runtime that keeps track of all of your variables, memeory usage etc etc
 it detects that the inner function is relying on variables from the outer function 
 when that happens, the runtime ensures that any variables in the outer function that 
 are needed are still available to the inner function even if the outer function 
 goes away 
 
 Because it enclosed relevant variables from the outer function into its bubble (aka scope)
 is known as a closure

 To define a closure more formally, it is a newly created function that also contains 
 its variable context. 

 closure=function(usually created/retuned by another function ) + outer context(variables 
    this function relies on )
 
 */


