/* 

Meet the Keyboard Events

To work with keyboards in a HTML document, there are three events that you will need to 
familiarize yourself with. Those events are:

keydown
keypress
keyup


Given what these events are called, you probably already have a vague idea of what each event does. 
The keydown event is fired when you press down on a key on your keyboard. The keyup event is 
fired when you release a key that you just pressed. Both of these events work on any key that you
interact with.

The keypress event is a special bird. At first glance, it seems like this event is fired when you 
press down on any key. Despite what the name claims, the keypress event is fired only when you
press down on a key that displays a character (letter, number, etc.). What this means is 
somewhat confusing, but it makes sense in its own twisted way.

If you press and release a character key such as the letter y, you will see the keydown, 
keypress, and keyup events fired in order. The keydown and keyup events fire because the 
y key is simply a key to them. The keypress event is fired because the y key is a character key.
If you press and release a key that doesn't display anything on the screen 
(such as the spacebar, arrow key, function keys, etc.), all you will see are the keydown
and keyup events fired.

This difference is subtle but very important when you want to ensure your key presses are 
actually overheard by your application.

Using These Events

The way we listen to the keydown, keypress, and keyup events is similar to any other event 
we may want to listen and react to. We call addEventListener on the element that will be
dealing with these events, specify the event we want to listen for, specify the event handling
function that gets called when the event is overheard, and a true/false value indicating
whether we want this event to bubble.

Here is an example of us listening to our three keyboard events:

document.addEventListener("keydown", dealWithKeyboard, false);
document.addEventListener("keypress", dealWithKeyboard, false);
document.addEventListener("keyup", dealWithKeyboard, false);

function dealWithKeyboard(event) {
	// gets called when any of the keyboard events are overheard
}

If any of these events are overheard, the dealWithKeyboard event handler gets called. 
In fact, this event handler will get called three times if we happen to press down on a 
character key.

The Keyboard Event Properties

When an event handler that reacts to a keyboard event is called, a Keyboard event argument
Is passed in. Let's revisit our dealWithKeyboard event handler that we saw earlier.

In that event handler, the keyboard event is represented by the event argument that is passed in:

function dealWithKeyboard(event) {
	// gets called when any of the keyboard events are overheard
}


This argument contains a handful of properties:

keyCode

Every key we press on your keyboard has a number associated with it. 
This read-only property returns that number.

charCode

This property only exists on event arguments returned by the keypress event,
and it contains the ASCII code for whatever character key you pressed.

ctrlKey, altKey, shiftKey

These three properties return a true if the Ctrl key, Alt key, or Shift key are pressed.

metaKey

The metaKey property is similar to the ctrlKey, altKey, and shiftKey properties in that it 
returns a true if the Meta key is pressed. The Meta key is the Windows key on Windows keyboards
and the Command key on Apple keyboards.

The Keyboard event contains a few other properties, but the ones you see above are the most 
interesting ones. With these properties, you can check for which key was pressed and react
accordingly.

Changes Up Ahead!
The charCode and keyCode properties are currently marked as deprecated by the web standards
people at the W3C. It’s replacement might be the mostly unsupported code property. 
Just be aware of this, and be ready to update your code in the future when whichever successor 
to charCode and keyCode has taken his/her rightful place on the throne.

Some Examples
*/


document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
	if (e.keyCode === 65) {
		alert("The 'a' key is pressed.");
	}
}

/*
The particular key I check is the a key. Internally, this key is mapped to the keyCode value of 65. 
You can find a handy list of all key and character codes at  https://keycode.info

Some things to note. The charCode and keyCode values for a particular key are not the same.
Also, the charCode is only returned if the event that triggered your event handler was keypress.
In our example, the keydown event would not contain anything useful for the charCode property.

If you wanted to check the charCode and use the keypress event, here is what the above 
example would look like  (click "d"):

https://www.w3schools.com/charsets/ref_html_ascii.asp

*/

window.addEventListener("keypress", checkKeyPressed2, false);

function checkKeyPressed2(e) {
	if (e.charCode === 100) {
		alert("The 'd' key is pressed.");
	}
}

/*

code ref  found here 

https://www.w3schools.com/charsets/ref_html_ascii.asp   (ASCII Printable Characters)

Doing Something When the Arrow Keys are Pressed

We see this most often in games where pressing the arrow keys does something interesting.
 The following snippet of code shows how that is done:

 window.addEventListener("keydown", moveSomething, false);

function moveSomething(e) {
	switch(e.keyCode) {
		case 37:
			// left key pressed
			break;
		case 38:
			// up key pressed
			break;
		case 39:
			// right key pressed
			break;
		case 40:
			// down key pressed
			break;	

Detecting Multiple Key Presses

Now, this is going to be epic! An interesting case revolves around
detecting when we need to react to multiple key presses. Below is an example of how to do that:

window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);

var keys = [];

function keysPressed(e) {
	// store an entry for every key pressed
	keys[e.keyCode] = true;
	
	// Ctrl + Shift + 5
	if (keys[17] && keys[16] && keys[53]) {
		// do something
	}
	
	// Ctrl + f
	if (keys[17] && keys[70]) {
		// do something
	
		// prevent default browser behavior
		e.preventDefault();	
	}
}

function keysReleased(e) {
	// mark keys that were released
	keys[e.keyCode] = false;
}

Going into great detail about this will require another tutorial by itself, but let's just look
 at how this works.

First, we have a keys array that stores every single key that you press:

var keys = [];

As keys get pressed, the keysPressed event handler gets called:

function keysPressed(e) {
  // store an entry for every key pressed
  keys[e.keyCode] = true;

  // Ctrl + Shift + 5
  if (keys[17] && keys[16] && keys[53]) {
    // do something
  }

  // Ctrl + f
  if (keys[17] && keys[70]) {
    // do something

    // prevent default browser behavior
    e.preventDefault();
  }
}

When a key gets released, the keysReleased event handler gets called:

function keysReleased(e) {
	// mark keys that were released
	keys[e.keyCode] = false;

Notice how these two event handlers work with each other. As keys get pressed,
an entry gets created for them in the keys array with a value of true. When keys
get released, those same keys are marked with a value of false. The existence of
the keys you press in the array is superficial. It is the values they store that
is actually important.


As long as nothing interrupts your event handlers from getting called properly such 
as an alert window, you will get a one-to-one mapping between keys pressed and keys 
released as viewed through the lens of the keys array. With all of this said, the checks
for seeing which combination of keys have been pressed is handled in the keysPressed event
handler. The following highlighted lines show how this works:

function keysPressed(e) {
  // store an entry for every key pressed
  keys[e.keyCode] = true;

  // Ctrl + Shift + 5
  if (keys[17] && keys[16] && keys[53]) {    <<<<<<<<<<<<<<<
    // do something
  }

  // Ctrl + f
  if (keys[17] && keys[70]) {                 <<<<<<<<<<<<<<
    // do something

    // prevent default browser behavior
    e.preventDefault();
  }
}


There are two things you need to keep in mind. The order of your checks matter. 
Ensure the checks are arranged in decreasing order of the number of keys that are pressed. 
Second, some key combinations result in your browser doing something. To avoid your 
browser from doing its own thing, use the preventDefault 


Listening for Keyboard Events on Div Elements (and so on!)

You can listen for keyboard events on any element that is capable of receiving focus.
Some elements, like the popular div element, are not such elements. 
To listen for keyboard events on these non-focusable elements, simply make them focusable 
by giving them a tabindex attribute and a unique numerical value:

<div tabindex="0">
  <h1>Blah!</h1>
</div>

*/
