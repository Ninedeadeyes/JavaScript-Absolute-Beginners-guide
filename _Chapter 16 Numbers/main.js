
/* Using a Number 

In order to use a number, all you have to do is, well use it. eg  */

let stooges=3;
let pi=3.14159;
let color=0xff;
let massOfEarth=5.9742e+24;
console.log(massOfEarth);
console.log(color);

// In the above example, we use a decimal value, a hexadecimal value and a really large value using exponents. 
// in the end, your browser will automatically ado the right thing. 

// Operators 

//No introduction to numbers would be complete without showing how you can use mathematical operators in code

let total= 4+46;
let average= total/2;
let doublePi=2*3.14159;
let subtractItem=50-25;
let remainder= total%7;
let more= (1+average*10)/5;
console.log(more);

// JavaScript evaluates expression in the following order : 
// Parentheses, Exponents, Multiply, Divide, Add, Subtract
// 'Please Excuse My Dear Aunt Sally' 

/* Incrementing and Decrementing 

A common thing you will do with numbers will involve incrementing or decrementing 
a variable by a certain amount 

Expression 

i++     Increment i by 1 ( i=i+1)
i--     Decrements i by 1 (i=i-1)
i+=n    Increment i by n  (i=i+n)
i-=n    Decrements i by n (i=i-n)
i**=n   Exponential operator where I raised to the power of n

other expressions include 
i*=n, i/=n and  i%=n  

Before we move on there is one quirk you should be aware of. It has to do with the 
-- and ++ operators for incrementing or decrementing a value by 1. 

For example 

*/

let i =4;
let j = i++;
console.log(i); 
console.log(j); 

// After executin gthese two lines, the value of i will be 5, just like you would expect
//The value of J will be 4 . Notice the operator appears after the variable. 

// If we place the operator in front of the variable the result are a bit different

let a =4;
let b= ++a;
console.log(a); 
console.log(b); 

// The value of a will be 5 but the value of b will also be 5. 

/*  The position of the operator deterimines whether the incremented value will be 
returned or the pre-incremented value wil be returned 

Hexadecimal and Octal Values 

Beyond using normal decimal values, you can also use hexadecimal ( base 16) and 
octal ( base 8) value as well 

Let leet= 0o2471;  Octal value starts with a 0 
Let leet= 0x539   Hexadecimal starts with a 0x 

sometimes you will need to convert a string to octal or hexadecimal values 
The parseInt function takes your hexadecimal or octal value followed by the 
base you are converting from. 

*/

let hexValue= parseInt("FFFFFF",16);
let octaValue=parseInt("011",8);
console.log(hexValue); // 16777215
console.log(octaValue); //9

/* Special Values- Infinity and NaN 

The last thing we will look at are two global properties that you will encounter 
that aren't numerical value

Infinity :  You can use infinity or -infinity values to define infinitely large or small numbers 

let myLoveForYou= Infinity*2

The chance of you having to use Infinity are often very slim, instead you will probably see 
it returned as part of something else. 

NaN : The NAN keyword stands for 'Not a Number' and it gets returned when you do 
some numerical operation that is invalid. 

let nope =1920/"blah";

The Math Object 

Number are used in a variety of mathmatical expressions, and they often go beyong simple 
additions, subtractions, mulitplications and divisions. Your math classes back in the day

To help you move easily do complicated numerical things, you have the Math Object.  

This object provides you with alot of functions and constant that wil come in handy. 

The Constants : To avoid you having to explicitly define mathematical constants like pi, 
the Math object defines many common constants. 

Math.E = Euler's constant
Math.LN2= Natural Logarithm of 2 
Math.PI= 3.14159 ETC ETC 
Math.SQRT2= Square root of 2 

There are many more but you can just find them on the internt when you need them. 

Rounding Numbers 

Math.round()  Returns a number that is rounded to the nearest integer  if .5 or more will round up 
Math.ceiling()  Will round up unless equal to the argument 
Math.round()   Will round down 

eg : */

let floor1= Math.floor(3.54);  //3
let ceil1= Math.ceil(3.14);     //4
let ceil2= Math.ceil(3.00);     //3
let round1= Math.round(3.49);    //3
let round2= Math.round(3.50);   //4


console.log(floor1); 
console.log(ceil1); 
console.log(ceil2); 
console.log(round1); 
console.log(round2); 
 
/*
Trignometric Functions 
Math.cos()
Math.sin()
Math.tan()

To use any of these just pass in a number as the argument ( They take arguments in the 
form of radian values)

Power and Square Roots 

Math.pow()  Raises a number to a specified power
Math.exp()  Raises the Euler's constant to a specified number
Math.sqrt() Returns the square root of a given argument

eg :*/
Math.pow(2,4);   // equ to 2*2*2*2
Math.exp(3) ;  // equ to Math.E^3
Math.sqrt(16); //4

// IF you want to get the absolute value of a number use  Math.abs() function 

Math.abs(-6) //6

//Random Number 

// To generate a somewhat random number between 0 to less than 1 you have the 
//Math.random() function. This function doesn't take any arguments but you can simply 
// use it as  part of a mathematical expression eg

let randomNumber=Math.random()*100;

// Each time your function is called, you will see a different number 
