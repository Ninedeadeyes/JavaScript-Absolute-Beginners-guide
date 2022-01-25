/* Timer 

By default our code runs synchoronously. That is a fancy of way of saying that 
when a statement need to execute, it execute immediately. 

The concept of delaying execution or deferring work to later isn't a part of 
Javascript default behaviour 

All of this doesn't mean the abilty to stop work from running instantaneously doesn't 
exisit. 

There are  three functions that allow us to delay execution/ defer work :SetTimeout,
setInterval and requestAnimnationFrame 

*/

/* Delaying with setTimeout

The function allows us to delay executing some code. 

let timeoutID= setTimeout(someFunction,delayInMilliseconds)

eg  */

function showAlert1(){
    alert("moo");
}
function showAlert2(){
    alert("boo");
}


let instant=showAlert2();   // This will instantly be invoked 
let timeoutID=setTimeout(showAlert1,2000);
setTimeout(showAlert2,4000);  //  called directly 


// The reason why the setTimeout is initialized from a variable is because it would 
// be easier to reference later for example to cancel the time eg : clearTimeout(timeoutID)
// You can just use it directly without it a part of a variable initialization. 

// Times this function is used in the real world is to detect whether users are inactive or idle


/* Looping with setInterval 

The setInterval function is similar to setTimeout but the main difference is that it doesn't
just execute the code once, it keeps on executing the code in a loop forever 

let intervalID=setInterval(someFunction,delayInMilliseconds)

The first argument specifies the inline code of function you would like to execute 
The second argument specifies how long to wait before your code loops again 

eg :*/

let thingToPrint="";  //empty variable 

function drawText(){
    thingToPrint+="#";   // every time function plays adds a "#" to variable 
    document.writeln(thingToPrint);   // write the variable to screen 
}

let intervalID=setInterval(drawText,2000);

// If we want to cancel the looping it would be clearInterval(intervalID);

// In real life can be used to create animation, some other examples when this is used are
//https://www.kirupa.com/html5/creating_a_sweet_content_slider.htm
//https://www.kirupa.com/html5/totally_awesome_analog_clock.htm


// Animating smmothly with request AnimationFrame 

/* The requestAnimationFrame function is all about synchronizing your code with a browser 
repaint event meaning your browser is busy juggling a billion differnt things at any give 
time for example: listening to mouse click,executing JavaScript etc etc.
At the same time it is also redrawing the screen at 60 fps or at least trying its best. 

When you have code that is intended to animate something to the screen, you want to ensure 
your animation code runs properly. To avoid your animation code from being treated like 
any other generic JavaScript, you have the requestAnimationFrame function which gets special 
treatment by the browser. This allows it to time its execution perfectly to avoid dropped frame
and avoid unecessary work,

let requestID=requestAnimationFrame(someFunction);

The only real difference is that we don't specify a duration value. The duration is 
automatically calculated based on the current frame rate 

eg

function animationLoop(){
    //animation-related  code 

    requestAnimationFrame(animationloop)
}

Notice our requestAnimationFrame is calling animationLoop. While this kind of 
circular referencing would almost gurantee a frozen/hung browser, requestAnimationFrame
implementation avoid that, instead it ensures the animationLoop function is called just 
the right amount of times needed to ensure things get drawn on screen. 

 Please read Animations in JavaScript chapter for a deeper dive. 

*/


















