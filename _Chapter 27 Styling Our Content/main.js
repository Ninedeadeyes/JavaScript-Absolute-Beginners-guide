/*

Why Would We Set Styles Using JavaScript?

In the common cases where we use style rules or inline styles to affect how
an element looks, the styling kicks in when the page is loaded. 

There are many cases, especially as our content gets more interactive, 
where we want styles to dynamically kick in based on user input,
some code having run in the background, and more.

JavaScript not only lets us style the element we are interacting 
with, more importantly, it allows us to style elements all over the page. 

A Tale of Two Styling Approaches

We have two ways to alter the style of an element using JavaScript.
  
One way is by setting a CSS property directly on the element. 
  
The other way is by adding or removing class values from an 
element which may result in certain style rules getting applied or ignored.


Setting the Style Directly

Every HTML element that you access via JavaScript has a style object.
This object allows you to specify a CSS property and set its value.

For example, this is what setting the background color of an HTML
element whose id value is superman looks like:

let myElement = document.querySelector("#superman");
myElement.style.backgroundColor = "#D93600";

To affect many elements, you can do something as follows:

let myElements = document.querySelectorAll(".bar");

for (let i = 0; i < myElements.length; i++) {
	myElements[i].style.opacity = 0;


In a nutshell, to style elements directly using JavaScript,

The first step is to access the element using querySelector or querySelectorAll method

The second step is just to find the CSS property you care about and give it a value. 
Remember, many values in CSS are actually strings. Also remember that many values require a
unit of measurement like px or em or something like that to actually get recognized

Lastly, some CSS properties require a more complex value to be provided with 
a bunch of random text followed by the value you care about. 

One approach for setting a complex value is to use good old fashioned string concatenation:

myElement.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";

That can get really irritating, for keeping track of the quotation marks and 
so on is something tedious and error-prone. One less irritating solution is to use
the string literal syntax:

myElement.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;

Notice how this approach allows you to still provide custom values while
avoiding all of the string concatenation complexity.


Special Casing Some Names of CSS Properties

Most names in CSS would get JavaScript's seal of approval, 
so you can just use them straight-up from the carton. 
There are a few things to keep in mind, though.

To specify a CSS property in JavaScript that contains a dash, simply remove the dash.
For example, background-color becomes backgroundColor, 
the border-radius property transforms into borderRadius

Also, certain words in JavaScript are reserved and can't be used directly.
One example of a CSS property that falls into this special category is float.
In CSS it is a layout property. In JavaScript, it stands for something else.
To use a property whose name is entirely reserved, prefix the property with css where
float becomes cssFloat.

another variation to our earlier approach we can use for setting styles directly.
It involves using Object.assign

let color = "red"
let fontSize = "2em"
let fontWeight = "bolder"

Object.assign(myElement.style, {
  color,
  fontSize,
  fontWeight,
});

For our DOM element represented by myElement, the color, fontSize, and fontWeight 
CSS properties are set with a single operation. An approach like this is a huge timesaver 
if we need to set many properties or are using frameworks like React where large amounts
of CSS-in-JS is the norm.


Adding and Removing Classes Using

The second approach involves adding and removing class values that,
in turn, change which style rules get applied


For example, let's say we have a style rule that looks as follows:

.disableMenu {
	display: none;
}

In HTML, we have a menu whose id is dropDown

<ul id="dropDown">
	<li>One</li>
	<li>Two</li>
	<li>Three</li>
	<li>Four</li>
	<li>Five</li>
	<li>Six</li>
</ul>

Now, if we wanted to apply our .disableMenu style rule to this element, 
all we would need to do is add disableMenu as a class value to the dropDown element:

<ul class="disableMenu" id="dropDown">
	<li>One</li>
	<li>Two</li>
	<li>Three</li>
	<li>Four</li>
	<li>Five</li>
	<li>Six</li>
</ul>

One way to accomplish this involves setting an element's className property,
an approach we saw earlier. The trouble with className is that we are responsible 
for maintaining the current list of class values applied.

To help alleviate some of the inconvenience, we now have a much nicer API that
 makes adding and removing class values from an element ridiculously easy

This new API is affectionately known as classList, and it provides a
handful of methods that will make working with class values a piece of cake:

add
remove
toggle
contains

What these four methods do may be pretty self-explanatory from their names,
 but let's look at them in further detail.

 Adding Class Values

 To add a class value to an element, get a reference to the 
 element and call the add method on it via classList:

 

let divElement = document.querySelector("#myDiv");

divElement.classList.add("bar");
divElement.classList.add("foo");
divElement.classList.add("zorb");
divElement.classList.add("baz");

console.log(divElement.classList);

After this code runs, our div element will have the following class values: bar, foo, zorb, baz. 
The classList API takes care of ensuring spaces are added between class values. 
If we specify an invalid class value, the classList API will complain and not add it.

If we tell the add method to add a class that already exists on the element,
our code will still run, but the duplicate class value will not get added.


Removing Class Values

To remove a class value, we can call the remove method on classList:

let divElement = document.querySelector("#myDiv");
divElement.classList.remove("foo");

console.log(divElement.classList);

After this code executes, the foo class value will be removed.
What we will be left with is just bar and zorb. Pretty simple, right?


Toggling Class Values

For many styling scenarios, there is one very common workflow. 
First, we check if a class value on an element exists. If the value exists, 
we remove it from the element. If the value does not exist, 
we add that class value to the element. To simplify this very common toggling pattern, 
the classList API provides you with the toggle method:

let divElement = document.querySelector("#myDiv");
divElement.classList.toggle("foo"); // remove foo
divElement.classList.toggle("foo"); // add foo
divElement.classList.toggle("foo"); // remove foo

The toggle method, as its name implies, adds or removes 
the specified class value on the element each time it is called.

Checking if a Class Value Exists

The last thing we are going to look at is the contains method:

let divElement = document.querySelector("#myDiv");

if (divElement.classList.contains("bar") == true) {
	// do something

This method checks to see if the specified class value exists on the element.
If the value exists, you get true. If the value doesn't exist, you get false.

Conclusion

So, there you have it - two perfectly fine JavaScript-based approaches you can use for 
styling your elements. Of these two choices, if you have the ability to modify your CSS,
I would prefer you go style elements by adding and removing classes. 

The simple reason is that this approach is far more maintainable. It is much easier to
add and remove style properties from a style rule in CSS as opposed to adding and removing 
lines of JavaScript.

*/