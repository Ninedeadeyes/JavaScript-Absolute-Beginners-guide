// Strings 

//Beside just listing strings, we'll often combine a couple of strings together 


let initial="hello";
console.log(initial+'world');
 // Can either use single or double quotes but keep in one style for consistency

console.log("I can also do"+" this");

/*
 When we can see the contents of your string as literally as we do, these 
 strings are know as STRING LITERALS but doesn't change the fact they are still 
 are a built-in primitive type called a string. 

 String Properties and Methods

 When we are working with strings, the underlying String object implementation contains
 a lot of properties that makes working with text easier. 

 Accessing Invidiual Characters 

 When a string looks like one cohesive unit, it is actually make up a series of characters.
 We can access each character in several ways. The most common way is by using array/bracket 
 notation and passing in a number that corresponds to the index position of the character. 

 */
let vowels="aeiou";
console.log(vowels[2]);

// To go one step further, we can access all characters in our string by just looping 
// through the index positions. 

for (let i=0; i<vowels.length; i++){
    console.log(vowels[i]);
}

//alternatively you can use charAt method but probably best stick to array.bracket unless 

console.log(vowels.charAt(2));

/* Combining Strings ( aka Concatenating)

To combine two strings together, we can use + or += operators 

*/

let stringA="I am a simple string";
let stringB="I am a simple string too";
console.log(stringA+""+stringB);

stringA+=stringB;

console.log(stringA);

// You can mix string primitive and string objects and still get your text to combine 
let textA="Please";
let textB=new String("stop");

let combined=(textA+" make it "+textB);
console.log(combined);

// Despite all of the mixing going on, the type of the combined variable is simply a 
// string primitive.  We can also use concat method but + and += should be sufficient in most cases

let foo="I really ";
let blah="why anybody would";
let blarg="do this";

let result=foo.concat("don't know"," ",blah,"",blarg);
console.log(result);

/* Getting Substring out of Strings

Sometimes, what we are interested in is a sequence of characters somewhere in 
the middle of the string. The two properties that help satisfy this interest
are slice and substr. 

*/

// slice Method 

let theBigString="Pulp Fiction is an awesome movie";

console.log(theBigString.slice(5,12));  //output: Fiction 

// First augement is the start position and the second is the end position of the index 
// The end position can be negative which means the end position will be 
// what is left when you count backwards from the end, for example

console.log(theBigString.slice(0,-6));  //output: Pulp Fiction is an awesome

// Negative starting position will mean , your starting position will be 
// is the count of whatever you specify stating from the end of the string 

console.log(theBigString.slice(-14,-6));  //output: awesome

// First version is probably most important to learn. 

/*substr Method 

The next approach we will look at for splitting up your string. This method 
takes two arguments as well 

The first argument is a number that specifies your starting position, and the 
second argument is a number that specifies the length of your substring 

let newString=substr(start,length);  eg:
*/

console.log(theBigString.substr(0,4)); //Pulp
console.log(theBigString.substr(5,7)); // Fiction 
console.log(theBigString.substr(5)); // Fiction is an awesome movie

// If you don't specify length, it will return from the start position to the end. 


/* Splitting a String/Split 

That which you can concatenate, you can also split apart. Calling this method 
on a string returns an array of substrings. These substrings are seperated 
by characters or REGULAR EXPRESSION  ( AKA RegEx ) that we use to determine 
where the split apart our string. 

*/

let inspirationalQuote="That which you can concatenate, you can also split apart";

let splitWordsA=inspirationalQuote.split(" ");

console.log(splitWordsA.length)//10 
console.log(splitWordsA);  // display an array with 10 words 

// Another example 

let days="Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday";
let splitWordsB=days.split(",");    // The comma becomes the seperator( RegEx)

console.log(splitWordsB[6]); //Sunday 

/* Find something inside a String 

If we ever need to find a character or characters inside a string we can use 
the indexOf, lastIndexOf and match methods

*/

let questionsA="I wonder what the pigs did to make these birds so angry?";

console.log(questionsA.indexOf("pigs")) //18 

// return the index position of the first occurrence of the word (18th index position)

let questionsB=" Do you sell wood ? If yes, how much wood do you have to build a wood ship?";

console.log(questionsB.lastIndexOf("wood")) //65


// return the index position of the last occurrence of the word (65th index position)
// You will see -1 if it doesn't occur in the string at all. 

// You can add one more argument you can specify to both indexOf and lastIndexOf 
// which will specify an index position on your string to start your search 

console.log(questionsB.indexOf("wood",20)) //37

/* 
The last thing to mention regarding these methods you can match any instance 
of these characters appearing in your string.  These functions do not differentiate 
between whole words or what you are looking for being a substring of a larger set 
of characters 

*/

let phrase=" There are 3 little pigs";
let regexp=/[0-9]/;

let numbers=phrase.match(regexp);

console.log(numbers[0]); //3   only will be able to match first item in the array  
console.log(numbers);

// What also gets returned is array of matching substrings

// Upper Case and Lower Case Strings  ( This is relatively self explantory )

console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());









