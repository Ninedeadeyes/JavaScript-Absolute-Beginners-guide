/* Booleans and The Stricter === and !== Operators 

The Boolean Object

Booleans are meant to be used as primitives but every primitive there is an 
Object based representation 

let boolObject= new Boolean(False);

The initial value you can pass in to the Boolean constructor is commonly true and 
false, but you can pretty much pass anything in there that will result in the 
final evaluation being true or false 

but ... UNLESS YOU REALLY WANT A BOOLEAN OBJECT, YOU SHOULD STICK WITH PRIMITIVES 

The downside with the Boolean constructor is that you are obviosuly left with a
boolean object-which isn't desireable. Fortunately, there is a way to get the 
flexibility of the Boolean constructor with the lightweightness of a Boolean 
primitive and that is with a Boolean Function 

The Boolean Function 

Boolean() function in JavaScript: Boolean function returns the boolean value of variable. 
It can also be used to find boolean result of a condition, expression etc.

The values you can pass in to return false are 'null', undefined, empty/nothing, 0
and empty string and or course false 

To return true, we can pass in a value of ture or ANYTHING that results in something other 
than the false value we saw earlier. 

*/

bool0=Boolean({});
bool1=Boolean(true);
bool4=Boolean("hello");
bool3=Boolean(9>8);
bool2=Boolean(8>9);
bool5=Boolean();
bool6=Boolean("");
console.log(bool1);
console.log(bool2);
console.log(bool3);
console.log(bool4);
console.log(bool5);
console.log(bool6);

/*  Rem if we are evaluating is an object such as new Boolean(new Boolean()); the 
evaluation will always be true. The reason is that the mere existence of an object
will trigger the true switch and calling the object will result in a new object

for example */

let boolObject = new Boolean(false);

if (boolObject) {
    alert("Bool, you so crazy!!");
    
}
/*This might some confusing, but you can easily avoid it if you
generally avoid using Boolean objects and the Boolean constructor,

The Boolean() function is particularly useful when truth-checking data
and probably significantly more readable than the double negation (!!) operation:
*/


 x = true;

// This doesn't look too nice
if (!!x) {
  // ...
}

// This is a lot more readable
if (Boolean(x)) {
    alert("Bool, you so MAD!!");
}

/* Stict Equality and Inequality 

== and != are the equality and inequality operators that let us know if two things are either equal or unequal. Here is the 
plot twist there is a subtle and deviant behaviour they exhibit that we may not be aware of. 

example eg: 

*/

function theSolution (answer){
  if (answer==42){
    console.log("You have nothing more to learn");
  }
}

theSolution("42");

/* In this example, the expression answer==42 will evaluate to true. This works despite the 42 we passed in being a 
string and the 42 we are checking against being a number. With the == and != this is expected behaviour, to make 
this work JavaScript forces the two different yet similar values to be the same under the hood. This is formally 
known as TYPE COERCION 

The problem is that this behaviour can be undesireable especially when this is happening without us knowing about it. 

To avoid situation like this we have stricter versions of the equality and inequality operators and they are 
=== and !== 

What these operators do is that they check for BOTH VALUE AND TYPE and do not perform any TYPE COERCION  
eg : */

function theSolution2 (answer){
  if (answer===42){
    console.log("You have nothing more to learn");

  }
  else{
      console.log("It was not meant to be");
  }

}

theSolution2("42");


/* Generally speaking always use the stricter forms of the equality 
and inequality operators, If anything using them will help us to spot
errors in our code. 

CAUTION :  Just to make you aware when comparing two different objects
the neither type of operators will work. Keep this in mind when 
comparing two seperate, individual objects. 

eg: 

*/

console.log(new String("A") == new String("A"));
console.log(new String("A") === new String("A"));
console.log([1, 2, 3] == [1, 2, 3]);
console.log({ a: 1 } == { a: 1 });