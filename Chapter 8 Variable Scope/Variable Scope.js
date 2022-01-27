//Variable Scope 

/* Global Scope: If we say a variable is available globally, it means that any code on 
our page has access to read and modify this variable */

let counter=0;
alert (counter);

function returnCount(){
     counter+=5;
     return counter;
}

returnCount()

alert (counter);


// By virtue of this variable being declared directly inside the script without being place
// inside a function, the counter variable is considered to be global hence it can be access
// by any code that lives in our document.

//local Scope : A variable declared inside a function will not work when accessed outside of a 
// function. 

function setState(){
    let state="on";
}

setState() //undefined 

/* The reason is that the scope for our state variable is local to the setState function itself, 
 the state variable is just local 

 Technically if you do not declare it with let/const/var, makes the variable live globally but 
 not recommended.  */ 

/* Miscellaneous Scoping Shenanigans 

Block Scoping : Our code is made up of blocks. A blcoks is a collection of JavaScript statement 
almost always wrapped by curly braces. 

Let safeToProceed=false;

function isItSafe(){
    
    if (safeToProceed){
        alert("You shall pass!");
    }
    
    else{
        alert("You shall not pass!")
    }
}

Counting the pair of curly brackets, there are three blocks here. 

Any variable decalred inside a block using let or const is local to that block and 
any child block contained inside it eg  */

function isThePriceRight(cost){
    let total=cost+1
    
    if (total>3){
        alert(total);
    }
    else{
        alert("not enough")
    }
}

isThePriceRight(7)

// The total variable is consider in-scope of the alert function because the if block 
// is a child of the function block. 

// Below we have an example of a variable that is consider out-of-scope 

function isThePriceRight(cost){
    let total=cost+1
    
    if (total>3){
        let warning=true;
        alert(total);
    }
    else{
        alert("not enough")
    }

    //alert(warning);   // This will prevent the script from working 
}

isThePriceRight(2)

// We have the warning variable within the child block that is attempted to be access by the alert 
// function within the parent block but it will not display the value of true because the parent 
// block could not access the child's variable. The warning variable is considered out-of-scope 

// in conclusion a child block will have access to parent's variable but a parent block will 
// not have access to a child's variable.

/*  Why is let preferred over var ??

Variable declared with var are scoped at the function level so as long as somewhere inside
the function the variable is declared, the variable is considered to be in-scope 
(ignores block scoping ).  Due to the leniency it is easy to make variable-related mistakes


How JavaScript process Variables?

When  JavaScript encounter a scope(global,function) one of the first thing it does 
is scan the full body for any declared variables, it initializes them by default
with undefined for var while let and const it leaves the variables completely 
uninitaliized, lastly it moves any variables it encounter to the top of the scope 

eg :

alert(foo);
let foo="hello";   // This will not run 

/* When JavaScript makes a pass at this, this code turned into the following 

let foo;
alert(foo);
foo="Hello";     

 THe foo variable despite being declared at the bottom of our code, gets kicked up 
to the top. This is more formally known as hoisting. The thing about Let and Const 
is that when they get hoisted, they are left uninitialized, hence the above code will not 
run. 

 Conclusion : Please declare and initialize your variables before actually using them 
eg : */

let goo;
goo="bye";
alert(goo);

