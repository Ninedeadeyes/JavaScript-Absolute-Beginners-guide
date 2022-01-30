/* We have worked with strings (text) numbers, booleans, functions and various other 
built in things that are part of the JavaScript Language. 

Unlike other Languages, JavaScript makes it really easy to specify and use 
these built in things. Despite how simple using these different kind of built in 
things, there is a lot of details that is hidden from us.  Knowing these 
details is important because it will not only help us make sense of our code 
more easily, it may even help us to more quickly pinpoint what is going wrong. 

These 'built in things' isn't the proper way to describe the variety of values you 
can use in your code.  The formal name is called 'types' 

Pizza Example : 

The mysterious world of types can be explained by the much simpler world of pizza. 

A pizza is made up of other ingredients, some simple that can't be broken down and the 
complex which are made up of other ingredients ( for example : sauce) but complex 
ingredients can also be made from other complex ingredients not just simple. 

The description of the simple and complex ingredients very neatly applies to types in 
JavaScript. Each individual ingredient could be considered a counterpart to a type that 
you can use 


Type 
String : The basic structure for working with text 

number: It allows you to work with numbers 

boolean: Comes alive when you use true or false 

null : Represent the digital evuivalent of nothing 

undefined: returned when a value should exist but doesn't like when you delcare a variable don't 
assign anything to it 

bigint: Allow you to work with really large or really small numbers 

symbols: Something unique and innutable (can't be changed) that you can optionally use 
as an identifier for Object properites 

Object : Acts a shell for other types including other objects

Types can be simple (primitive types) or complex(object types or just objects)

All the above aside from 'Object' are consider primitive types (There are 7). 
Primitive types are easy to define and bucket into something understandable.  

What are Objects ? 

The concept of objects in a programming language like JavaScript maps nicely to 
its real world equivalent for example : Your computer is an object that do alot of 
things whilst a paperweight is another object that don't do much. 

The thing with objects they come in different shapes, sizes and usefulness. Despite 
the variations, objects are all the same at a high-level. They are an abstraction. 
They provide an easy way for you to use them without having to worry 
about what goes on under the covers.  Even the simplest objects hide a certain 
level of complexity. 

The predefined Objects roaming around in JavaScript 

Beside the built-in Type you saw earlier, you also have a handful of predefined objects 
in JavaScripts that you can use out of the box. These objects allow you to 
work with everything from collections of data to dates to even text and numbers. 


Objects 

Array : Help store, retieve and manipulate a collection of data 
Boolean : Acts as a wrapper around the boolean primitive, still very much either a true/false
Date: Allows you to more easily represent and work with dates 
Function : Allow you to invoke some code among other esoteric things 
Math: Help you work better with numbers
RegExp: Provides a lot of functionality for matching patterns in text 
String : Acts as a wrapper around the string primitive 

The way use use these built-in objects is a little bit different than how you use primitives. 
Each dobject has it own quirk on how you can use them eg: */

// an array 

let name=["Bob","Sam","Tom"]

// Today's date 

let today= new Date();

// A boolean object

let booleanObject= new Boolean(true);

// A string object 

let hello=new String("hello");

/* One thing that you may find puzzling is the existence of the Object form of the 
string, boolean,symbol bigint and number primitives. On the surface the object-form
and primitive form of these type look very similar 

EG */

let movie="Pulp Fiction";
let movieObj=new String("Pulp Fiction");

console.log(movie);
console.log(movieObj);

// What you see printed is identical both movie and movieObj are very different 
// One is a primitive of type "string" and the other is type "Object" which 
// leads to some interesting behaviours that i will gradually touch upon 
// explore the handful of built in types that we'v seen so far. 



