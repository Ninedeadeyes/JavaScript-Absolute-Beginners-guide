/* 

Event Goes Down. Event Goes Up.

To better help us understand events and their lifestyle, let's frame all of this in the context 
of a simple example. Here is some HTML we'll refer to:

<!DOCTYPE html>
<html>

<body id="theBody" class="item">
  <div id="one_a" class="item">
    <div id="two" class="item">
      <div id="three_a" class="item">
        <button id="buttonOne" class="item">one</button>
      </div>
      <div id="three_b" class="item">
        <button id="buttonTwo" class="item">two</button>
        <button id="buttonThree" class="item">three</button>
      </div>
    </div>
  </div>
  <div id="one_b" class="item">

  </div>
</body>

</html>

Dom Representation look like 

                           WINDOWS   ( Click event starts here )

                             V

                          DOCUMENT 

                             V

                            HTML 
                              V
                            BODY   
                #one_a                  #one_b 
                  V

                 #two 
                  V
       V                     V         
    #three_a               #three_b
       V               V            V                         
   #buttonOne      #buttonTwo     #buttonThree 

Here is where our investigation is going to begin. Let's say that we click on the
buttonOne element. From what we saw previously, we know that a click event is going to 
be fired. The interesting part that I omitted is where exactly the click event is
going to get fired from. Our click event (just like almost every other JavaScript event)
does not actually originate at the element that we interacted with.

Instead, an event starts at the root of our document 

From the root, the event makes its way through the narrow pathways of the DOM
and stops at the element that triggered the event, buttonOne 
(also more generally known as the event target):

 WINDOWS>DOCUMENT>HTML>BODY>#one_a>#two>#three_a>#buttonOne

the path our event takes is direct, but it does notify every element along that path. 
If there is an event handler associated with the element on this path that matches the 
event currently passing by, that event handler will get called. Now, once our event 
reaches its target, it doesn't stop. The event keeps going by retracing its steps 
and returning back to the root:

 #buttonOne>#three_a>#two>#one_a>BODY>HTML>DOCUMENT>WINDOWS

Just like before, every element along the event's path as it is moving back on up gets
notified about its existence. Any event handlers present will get called as well.

Meet the Phases

One of the main things to note is that it doesn't matter where in our DOM we initiate an event. 
The event always starts at the root, goes down until it hits the target, and then goes back up
to the root. This entire journey is very formally defined, so let's look at all of this 
formalness.

The part where we initiate the event and the event barrels down the DOM from the
root is known as the Event Capturing Phase:

Event Capturing Phase=WINDOWS>DOCUMENT>HTML>BODY>#one_a>#two>#three_a>#buttonOne (aka phase 1)

The less learned among us may just call it Phase 1, so be aware that you might see the 
proper name and the phase name used interchangeably in event-related content you may 
encounter in real life. Up next is Phase 2 where our event bubbles back up to the root:

Event Bubbling Phase=#buttonOne>#three_a>#two>#one_a>BODY>HTML>DOCUMENT>WINDOWS


This phase is also known as the Event Bubbling Phase. The event "bubbles" back to the top!

Anyway, all of the elements in an event's path are pretty lucky. They have the good fortune 
of getting notified twice when an event is fired. This kinda sorta maybe affects the code 
we write, for every time we listen for events, we make a choice on which phase we want to 
listen for our event on. Do we listen to our event as it is fumbling down in the capture phase? 
Do we listen to our event as it climbs back up in the bubbling phase?

Choosing the phase is a very subtle detail that we specify with a 
true or false as part of our addEventListener call:

item.addEventListener("click", doSomething, true);

If you remember, I glossed over the third argument to addEventListener in the Events in 
JavaScript tutorial. This third argument specifies whether we want to listen for this event 
during the capture phase. An argument of true means that we want to listen to the event
during the capture phase. If we specify false, this means we want to listen for the event
during the bubbling phase.

To listen to an event across both the capturing and bubbling phases, we can simply do the
 following:

*/
let buttonTwo = document.querySelector("#buttonTwo");

buttonTwo.addEventListener("click", clickHandler, true);
buttonTwo.addEventListener("click", clickHandler, false);

function clickHandler(event) {
  console.log("I have been summoned!"); 
}
  
/*  
I don't know why one would ever want to do this,
but if you ever do, you now know what needs to be done.

Not Specifying a Phase

Now, you can be rebellious and choose to not specify this third argument for the phase altogether:

let buttonTwo = document.querySelector("#buttonOne");

buttonTwo.addEventListener("click", clickHandler);

When we don't specify the third argument, the default behavior is to listen to our event 
during the bubbling phase. It's equivalent to passing in a false value as the argument.

Who Cares?

At this point, you are probably wondering why all of this matters. 
This is doubly true if you have been happily working with events for a 
really long time and this is the first time you've ever heard about this.
Our choice of listening to an event in the capturing or bubbling phase is
mostly irrelevant to what you will be doing.

Very rarely will you find yourself scratching your head because your event listening
and handling code isn't doing the right thing because you accidentally specified
true instead of false in your addEventListener call.

With all this said...there will come a time in your life when you need to
know and deal with a capturing or bubbling situation.

1)Dragging an element around the screen and ensuring the drag still happens even 
if my mouse cursor slips out from under the cursor

2)Nested menus that reveal sub-menus when you hover over them

3)You have multiple event handlers on both phases, and you want to focus only on the capturing
or bubbling phase event handlers exclusively

4)A third party component/control library has its own eventing logic and you want to circumvent 
it for your own custom behavior

5)You want to override some built-in/default browser behavior such as when you click on the 
scrollbar or give focus to a text field

Event, Interrupted

The last thing I am going to talk about is how to prevent our event from propagating.
An event isn't guaranteed to live a fulfilling life where it starts and ends at the root. 
Sometimes, it is actually desirable to prevent our event from growing old and happy.

To end the life of an event, we have the stopPropagation method on our Event object:

function handleClick(event) {
	event.stopPropagation();

	// do something


As its name implies, the stopPropagation method prevents our event from running through
the phases. Continuing with our earlier example, let's say that we are listening for the 
click event on the three_a element and wish to stop the event from propagating. 
The code for preventing the propagation will look as follows:

*/

let buttonOne = document.querySelector("#buttonOne");

buttonOne.addEventListener("click", clickHandler, true);
buttonOne.addEventListener("click", clickHandler, false);

let threeA = document.querySelector("#three_a");

threeA.addEventListener("click", justStopIt, false);

function justStopIt(event) {
  console.log("You shall not pass!");
  event.stopPropagation();
}

function clickHandler(event) {
  //event.stopPropagation();
  console.log("I have been summoned!");

}

/* 
Our click event will steadfastly start moving down the DOM tree and notifying 
every element on the path to buttonOne. Because the three_a element is listening 
for the click event during the capture phase

In general, events will not continue to propagate until an event handler that gets 
activated is fully dealt with. Fully dealing with this event handler means that 
this event's journey is finished, thanks to the stopPropagation call.

Event Capturing Phase=WINDOWS>DOCUMENT>HTML>BODY>#one_a>#two>#three_a (STOPS HERE )


What about preventDefault? What is it?

Another function that lives on your event object that we may awkwardly run 
into is preventDefault:

function overrideScrollBehavior(event) {
	event.preventDefault();

	// do something


What this function does is a little mysterious. 

Many HTML elements exhibit a default behavior when we interact with them. For example,
clicking in a textbox gives that textbox focus with a little blinking text cursor appearing.
Using our mouse wheel in a scrollable area will scroll in the direction we are scrolling.
Clicking on a checkbox will toggle the checked state on or off. 
All of these are examples of built-in reactions to events our browser instinctively
knows what to do about.

If we want to turn off this default behavior, we can call the preventDefault function.
This function needs to be called when reacting to an event on the element whose default 
reaction we want to ignore. 


*/