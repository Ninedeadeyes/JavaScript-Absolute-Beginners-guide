/* When Primitives Behave like objects 

I have stated many times that primitives are very plain and simple. Unlike Objects, 
they don't contain properties that allow you to fiddle with their values in interesting ways
yet as clearly demonstrated by all the stuff we can do with strings,out primitives seems
to have a mysterious dark side to them

eg :*/

let greeting="hi, everybody !!";
let shout= greeting.toUpperCase();
console.log(shout);

/*
 As we can see from this brief snippet, our greeting variable which store a primitive value 
 in the form of a text seems to access to the toUpperCase method. How is this even 
 possible ? 
 
 As it turns out many of the built in primitive types can also interect in this way 
 (aside from symbol and BigInt). When we are working with boolean, number or string 
 primitives we have access to properties their Object equivalenet exposes. 

 There are several ways to create a new object but the most common way to create 
 an object for a built-in type like our string is to use the new keyword
 followed byt he word String  eg */

 let name= new String("Batman");

 /* The 'String' in this case isn't any normal word. It represents what is know as a 
 CONSTRUCTOR FUNCTION whose sole purpose is to be used for creating objects. 

 The main difference between the primitive and the object forms of a string is the 
 sheer amount of additional baggage the object form carries with it both the 
 (String protoyypes eg: big, charAt and the Object prototypes eg: constructor, valueOf)

Why this Matters 

Lets return to our earlier point of confusion. Our string is a primitive. How can 
a primitive type allow you to access properties on it ? 

The answer has to do with JavaScript being really weird. eg */

let game ="Dragon Age:Origin";

console.log(game.length);

/*
 As part of evaluating game.length, JavaScript will convert your primitive string into an 
 object.  For a brief moment your lowly primitive will become a beautiful object in order
 to figure out what the length actually is.  The temporary object isn't grounded or tied
 to anything after it serves its purpose, it goes away and you are left with the result
 of the length evaluation (a number ) and the game variable still being a string primitive 

 This transformation only happens for primitives. (Unique to primitives)

 You can verify everything I've said by examining the type of your data 

 */

 let gameObject= new String("Dragon Age:Origin");

 console.log(typeof game );        // string 
 console.log(typeof game.length);   //number 
 console.log(typeof gameObject); //object 

 /*
The reason why this transformation happens is due to memory consumption. As we saw from
our discussion on how much more baggage the object form of a primitive carries when 
compared to just a primitive, all of those pointers to additional functionality cost 
resources. 

The solution in JavaScript is a compromise. All literal values like 
text, numbers and booleans are kept primitives Only when they need to , are they converted
to their respective Object forms. 

It is to ensure a low memory footprint, these converted objects are quickly discarded (aka 
garbage collected once they have served their purpose) 
*/


