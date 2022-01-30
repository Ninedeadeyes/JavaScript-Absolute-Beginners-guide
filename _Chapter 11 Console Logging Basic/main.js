
/*  Console Logging Basics  ( used to understand what your code is doing )

When you are writing code you will often find yourself in one of two situations.
One situation is where you wonder if the code you just wrote is going to run at all, 
in the other situation, you know your code runs but it isn't running correctly. 
There is something wrong... Somewhere. 

In both of these situations, what you need is some extra visiability into what 
your code is doing. 

You can use the below alert method to check if button has been clicked or generally the 
alert code to identify where the error is in your code eg*/


let myButton1=document.getElementById("myButton1");
myButton1.onclick=doSomething;

function doSomething(e){
    alert("is this working");
}


/* but for anything more complicated it will be better to relay something know as the
'console' since alert dialogs are fleeting and there is a lot of busy work with the amount 
of dialogs that will keep pinging if you relay on alerts. 

Meet the console 

Console is part of the browswer's developer tools where all sorts of texts and stuff get
printed for you to see and occasionally interact with. 

At a very high level you can 

1) You can read messages you have told your code to log and display 

2) You can modify your application states by setting ( overwriting ) variables and values

3) YOu can inspect the value of any DOM element, applied style or code that is accessible 
and in scope 

4) You can use it as a virtual code editor and write/execute some code just for kicks 

We will be focus only at using the console to display messages. 

To bring up the developers tools you click  CTRL+ SHIFT +I ( WINDOWS ) and then click on 
console. 

Console logging 101

The first thing we are going to do is tell our console to display things on screen. 

The key to all of this is the Console API. This API contains a bunch of properties 
and methods that allow you to display things to your console in a variety of ways
for example 'console.log' 

eg  */

let myButton2=document.querySelector("#myButton2");
myButton2.addEventListener("click",doSomethingMore,false);

function doSomethingMore(e){
    console.log("is this working ");
}

/* Now that you've seen the basics , lets go a bit deeper, When using the console, you aren't 
limited to only printing some predefine text. For example a common thing you might do is 
print the value of something that exists only by evaluating an expression or accessing a
value. For example the code   

'console.log("We clicked on:"+e.target.id);  

Will display  'We clicked on:myButton3' ( id value of the button is displayed ) 

Displaying Warning and Errors 
It is time to look beyond the log method. OUr console object provide us with the warn and
error  methods that allow us to display messages formatted as warnings and errors. 

The way you use these two methods is no different fromhow you used the log method, 
just pass in whatever you want to display 

eg :

*/
let myButton3=document.querySelector("#myButton3");
myButton3.addEventListener("click",doSomethingElse,false);

let counter=0;

function doSomethingElse(e){
    counter++;

    console.log("Button Clicked"+counter+"time");
    console.log("We clicked on:"+e.target.id);

    if (counter==3){

        showMore();
    }

}

function showMore(){
    console.warn("This is a warning");
    console.error("This is an error");
}

/* The cool thing about warnings and errors is that you can exapnd them in the console 
and see the full stack trace of all the functions your code took before hitting them.
For large pieces of code with alot of branching, this is realy useful. 

The warn and error method provide an excellent way for us to better understand the 
twisted paths our code took into getting whatever state it ended up in. 

*/




