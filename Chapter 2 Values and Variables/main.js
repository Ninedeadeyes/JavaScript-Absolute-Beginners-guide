let myText="hello world";

alert(myText)

/* Every piece of data that we provide or use is consider to contain a value for example 
"hello world " is consider values. 

A Variable is an identifier for a value, instead of typing hello world, every time 
you can assign that phrase to a variable. 

You will first declare the variable   let myText  and then initialize the variable to 
a value eg: Let myText ="hello world";  */


// Declaring a variable is optional but it is best practise

// You can declare and intialize on different lines as shown below  

//We can change the value of a variable declared via let to whatever you want 

let myExample;
myExample="Goodbye World";
alert(myExample)
myExample=99;
alert(myExample)
myExample=4*8;
alert(myExample)
myExample=true;
alert(myExample)

//Const Keyword

//JavaScript provide a way for you to restrict the value of a variable from being changed
// after you initalize it 

const site="www.google.com";
alert(site);
site="testing";
alert(site);  // This will throw an error in the code 



