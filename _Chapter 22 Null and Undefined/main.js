/*

NULL 

The null keyword is a primitive that fills a special role in the 
world of JavaScript. It is an explict definition that stands for 
' NO VALUE'. 

For the advantage of null lies in its definitiveness. Instead of 
having variables contain stale values or mystery undefined values, 
setting a null is a clear indication that you WANT THE VALUE TO 
NOT EXIST 

This advantage is important when you are writing code and want to 
initialize or clear a variable to something that represent nothing 

eg */

let name=null;

if(name===null){
    name="Peter Griffin";
}
else {
    name="No name";
}

console.log(name)

// The null primitive isn't a naturally occuring resource. 

/* Undefined 

To represent something that isn't defined, you have the UNDEFINED primitive. You see undefined 
in a few cases. THe most common ones are when you try to access a variable that hasn't been 
initialized. 

In your code, you probably won't be assigning undefined to anything. Instead you will spend 
time checking to see if the value of something is undefined. 

 You have several ways to perform this check. 
 The first is a naive way that usually almost always works:

 */

 let myVariable1;


 if (myVariable1 === undefined) {
	// do something
    alert("Define me!!!");
}

/*
The downside of this approach has to do with what undefined actually is. Brace yourself - 
undefined is a global variable that happens to be automatically defined for us, 
and this means we can potentially overwrite it to something like true or 
whatever else we want to set it to. If undefined ever gets overwritten,
it would break our code if we just check with a === or == even. 


The best way to check for undefined involves

*/

let myVariable2;

if (typeof myVariable2 === "undefined") {
    alert("Define me too !!!");
}

/*  

NOTE :You can use the typeof operator to find the data type of a JavaScript variable.

typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"

null == undefined, but null !== undefined

Continuing the == and === weirdnesses, if you ever check for null == undefined, 
the answer will be a true. If you use === and have null === undefined,
the answer in this case will be false.

The reason is that == does type coercion where it arm twists types to conform to what 
JavaScript thinks the value should be. */