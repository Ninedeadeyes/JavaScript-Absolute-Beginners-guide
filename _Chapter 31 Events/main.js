/*

What are Events?

At a high-level, everything we create can be modeled by the following statement:

 
when (something) happens, do (something) 

We can fill in the blanks in this statement in a bajillion different ways.The first blank 
calls out something that happens. The second blank describes the reaction to that. 

This generic model applies to all of the code we've written together.

An event defines the thing that happens. It fires the signal.
The second part of the model is defined by the reaction to the event:

         EVENT            REACT TO THE EVENT  
when (something) happens, do (something) 

Ok - now that we have a high level overview of what events are,
let's dive into how events live in the nature reserve known as JavaScript.

Events and JavaScript

Given the importance of events, it should be no surprise to you that JavaScript
provides us with a lot of great support for working with them. To work with events,
there are two things we need to do:

1) Listen for events

2) React to events


1. Listening for Events

To more bluntly state what I danced around earlier, almost everything we do inside
an application results in an event getting fired. Sometimes, our application will fire
events automatically...such as when it loads. Sometimes, our application will fire events 
as a reaction to us actually interacting with it. The thing to note is that our application
is bombarded by events constantly whether we intended to have them get fired or not.
Our task is to tell our application to listen only to the events we care about.

The thankless job of listening to the right event is handled entirely by 
a function called addEventListener. 

The way we use this function looks as follows:

source.addEventListener(eventName, eventHandler, false);

That's probably not very helpful, so let's dissect what each part of this function means.

The Source

We call addEventListener via an element or object that we want to listen for events on. 
Typically, that will be a DOM element, but it can also be our document, window, 
or any object specially designed to fire events.


The Event Name
The first argument we specify to the addEventListener function is the name
of the event we are interested in listening to. The full list of events we
have at your disposal is simply too large to list

Event	    Event is fired...
click	    ...when you press down and release the primary mouse button, trackpad, etc.
mousemove	...whenever you move the mouse cursor
mouseover	...when you move the mouse cursor over an element. 
               This is the event you would use for detecting a hover!
mouseout	...when your mouse cursor moves outside the boundaries of an element.
dblclick	...when you quickly click twice.
keyup	    ...when you stop pressing down on a key on your keyboard

The Event Handler
The second argument requires us to specify a function that will get called when the event
gets overheard. This function is very affectionately known as the event handler by friends
and family. We'll learn a whole lot more about this function (and occasionally an object)
in a few moments.

To Capture, or Not to Capture, That Is the Question!
The last argument is made up of either a true or a false. To fully help us understand
the implications of specifying either value, we are going to have to wait until 
the the Event Bubbling and Capturing in JavaScript tutorial.

Putting It All Together

Now that we've seen the addEventListener function and what it looks like,
let's tie it all up with an example of this function fully decked out:

document.addEventListener("click", changeColor, false);

Our addEventListener in this example is attached to the document object.
When a click event is overheard, it calls the changeColor function
(aka the event handler) to react to the event. 
This sets us up nicely for the next section which is all about reacting to events.

2. Reacting to Events

As we saw in the previous section, listening to events is handled by addEventListener. 
What to do after an event is overheard is handled by the event handler. 
I wasn't joking when I mentioned earlier that an event handler is nothing more than a
function or object


The only distinction between a typical function and one that is designated as the event
handler is that our event handler function is specifically called out by name in 
an addEventListener call (and receives an Event object as its argument):

document.addEventListener("click", changeColor, false);

function changeColor(event) {
  // I am important!!!
}

A Simple Example

The best way to make sense of what we've learned so far is to see all of this fully
working. To play along, add the following markup and code to an HTML document:
*/

document.addEventListener("click", changeColor, false);

function changeColor() {
  document.body.style.backgroundColor = "#FFC926";
}


/*
Once you've completed your click (aka released the mouse press), your page's 
background will change from being white to a yellow-ish color:

Tying this back to the very beginning where we generalized how 
applications work, this is what this example looks like:

So when a 'click' happens do 'change the background color' 

We aren't done just yet. We let the event handler off the hook a little too 
easily, so let's pay it one more visit.

The Event Arguments and the Event Type

Our event handler does more than just get called when an event gets overheard 
by an event listener. It also provides access to the underlying event object
as part of its arguments. To access this event object easily, we need to modify
our event handler signature to support this argument.

Here is an example where we specify the event name to refer to our event arguments:

function myEventHandler(event) {
    // event handlery stuff
}

At this point, our event handler is still a plain ol' boring function. 
It just happens to be a function that takes one argument...the event argument! 
We can go with any valid identifier for the argument, but I tend to go with event
or just e because that is what all the cool kids do.

The important detail is that the event argument points to an event object,
and this object is passed in as part of the event firing. 
There is a reason why we are paying attention to what seems like a typical and
boring occurrence. This event object contains properties that are relevant
to the event that was fired. An event triggered by a mouse click will have 
different properties when compared to an event triggered by a keyboard key press, 
a page load, an animation, and a whole lot more. Most events will have their own 
specialized behavior that we will rely on, and the event object is our 
window into all of that uniqueness.

Despite the variety of events and resulting event objects we can get,
there are certain properties that are common. This commonality is made possible
because all event objects are derived from a base Event type (technically, an Interface)
Some of the popular properties from the Event type that we will use are:

1) currentTarget
2) target
3) preventDefault
4) stopPropagation
5) type

To fully understand what these properties do, we need to go a little deeper in our 
understanding of events. We aren't there yet, so just know that these properties exist.
We'll be seeing them real soon in subsequent tutorials.

Removing an Event Listener
Sometimes, we will need to remove an event listener from an element. The way we do that is
by using addEventListener's arch-nemesis, the removeEventListener function:

something.removeEventListener(eventName, eventHandler, false);

To remove this event listener, we need to specify the exact same arguments.

Here is an example:

document.addEventListener("click", changeColor, false);
document.removeEventListener("click", changeColor, false);

function changeColor() {
    document.body.style.backgroundColor = "#FFC926";

The event listener we added in the first line is completely neutralized 
by the removeEventListener call in the highlighted 2nd line. 
If the removeEventListener call used any argument that was different 
than what was specified with the corresponding addEventListener call, 
then its impact would be ignored and the event listening will continue

*/