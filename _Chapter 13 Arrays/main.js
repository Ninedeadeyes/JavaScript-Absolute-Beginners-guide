/* Arrays 

An array is a special variable, which can hold more than one value:
an array will look like this 

let groceries=[];  ( A groceries variable that is initialized to an EMPTY ARRAY)

The bracket-y appraoch for creating an array is better known as the 
ARRAY LITERAL NOTATION

You usually want an array with some items ( seperated by commas )

let groceries=["milk","bread","butter","apple"] ;

Accessing Array Values.

One of the nice things about arrays is that you not only have easy access to the 
array but you also have easy access to the array values. 

0 Milk 1 bread 2 butter 3 apple 

Inside an array each item is assigned a number starting with zero. The formal 
term for these numbers is called the index value. 

For example if i want to access 'bread' i will write 

groceries[1]

In this example you are referring to index position 1 which will be bread. 

The range of numbers you can use as your index value is one less than your array's length.
The reason is because the index starts at 0.

Let's go one step further. In  most real world scenaorios, you will want to programmatically 
go through your array as opposed to accessing each item individually. 

eg */

let groceries = ["milk", "bread", "butter", "apple"];


for (let i = 0; i < groceries.length; i++) {
    let item = groceries[i];
    console.log(item);
}

/* This will print out every item within the array. Notice the range of your loop starts at 0 
just one before your arrays full length ( the length property returns a count of all the 
items in your array hence in the above example it will be '4') Change the 'i' to a different 
number to see number to see it changes the output. 


Adding Items to your Array

To add items to your array, you will use the 'push method' 

groceries.push("Cookies");

The new added data will always find itself at the end of the array. If you want to add
data to the beginning of your array at 0, you use the unshift method 

groceries.unshift("Bananas");

boths methods will also return the new length of the array as well */

console.log(groceries.push("Cookies"));  // output 5

// Not very useful but it is good to know. 

/* Removing items from an Array 

To remove an item from your array, you can use the pop (remove last item) or 
shift method (remove the first item) 

let lastItem=groceries.pop();
let firstItem=groceries.shift();

When you are removing items, the value returned by the method call is the removed item itself 
the below example */

console.log(groceries.shift());  // milk

/* Finding items in the Array 

To find items inside your array, you have a handful of built in methods, indexOf, lastIndexOf,find
findIndex,and filter. 

We will focus on two indexOf and lastIndexOf 

indexOf method returns the first occurrence of the item you are searching for 
We pass the element we are looking for and the index position to start from 
*/


let resultIndex = groceries.indexOf("Cookies", 0);

console.log(resultIndex);  //3  ( remember we have deleted milk hence hence only 4 items)



// Notice the resultIndex variable stores the result of calling indexOf on our array. 
// eg the index position of the item 

// The lastIndexOf is similar but find the last occurance of the element and return
// the element's index position 

let lastResultIndex = groceries.lastIndexOf("Cookies", 3);
console.log(lastResultIndex);  // same as indexOf because there is only one item names 'Cookies'


/* Merging Arrays 

To merge two arrays use concat method */

let good = ["Mario", "Luigi", "Kirby"];
let bad = ["Koopa Troopa", "Goomba"];

let goodAndBad = good.concat(bad);
console.log(goodAndBad);

// The order of the element inside the new array will be good first and then bad second 

/* Mapping, Filtering and Reducing Arrays 

One of the other things arrays bring to the table is really simple ways to manipulate the data that 
is contained inside them. These simple ways are brough to you via 'map', "reduce" and filter methods 

The old school way

This is an approach that typically, involves a 'for' loop, keeping track of where in the array you are. 
Here is an example below of how to 'capitalise an array of names' 
*/

let names = ["homer", "marge", "bart", "lisa"];

let newName = [];

for (i = 0; i < names.length; i++) {
    let name = names[i];
    let firstLetter = name.charAt(0).toUpperCase();




    
    newName.push(firstLetter + name.slice(1));

}
console.log(newName);

/* 
The slice() method extracts a section of a string and returns it as a 
new string, without modifying the original string.
Begins extraction from the augment which is 1 ( second letter of the name)

The old way has alot of boilerplate and you will keep replicating unnecessarily 
This is the reason why map,filter and reduce were introduced. 
You get the flexibility of using a for loop without the unwanted side effects
and extra code 

Modifying Each Array Item with Map

The way maps work is as follows : You call it on the array that you wish to affect
(original Array) and it takes a function (someFunction) as the argument. The function
will run on each item in the array, allowing you to write code to modify each item
as you wish 

let newArray=originalArray.map(someFunction);

The end result is a new array whose contents are the result of 'someFunction'having
run and potentially modified each item. 

eg : */

//  Using the names array from previous example 

function capitalizeItUp(item) {
    let firstLetter = item.charAt(0).toUpperCase();
    return firstLetter + item.slice(1);
}

let newNamesMap = names.map(capitalizeItUp);
console.log(newNamesMap);

/*
 The function runs on each item and notice that the array item you are currently 
 on is passed in to this function as an argument. You can reference the current 
 item argument via whatever name you prefer. In this example it is reference as 'item'. 

 Inside the function, we can write whatever code we want to manipulate the current
 array item. The only thing we need to do is return the new array item value 
 After all this code runs, map returns a new array with all of the capitalized items
 in the correct location. The original array is never modified. 

 Our capitalizeItUp function is also known more generically by the name CALLBACK FUNCTION. 

 A CALLBACK FUNCTION does two thing 

 1) it is passed in as an argument to another function 
 2) It is called from inside the other function 

They are also used with FILTERS and REDUCEE


Filtering items 

With arrays, you'll often find yourself filtering ( aka removing ) items based on a 
given criterion, for even if you want to filter all the even numbers from a list
eg 
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let evenNumbers = numbers.filter(function (item) {
    return (item % 2 == 0);

})

console.log(evenNumbers);


/* We create a new array evenNumbers that will store the result of the filter
running on our numbers array. The contens of this array will be the even numbers
only thanks to our callback function checking each item to see whether the result
of %2 (aka checking if the remainder when you divide by 2) is 0 . If the call back 
function retuns a true, the item is carried over to the filtered array. 

One thing to note hre is that our callback function isn't an explicitly named 
function like our capitalizeItUp function we saw earlier. It is a simply an 
ANONYMOUS ONE but it still gets the job done. You'll see this anonymous form commonly
where a callback function needs to be specified. So become familar with this 
STYLE of defining a function. 

Getting one Value from an Array of Items

The last array method we will look at is REDUCE. With the reduce method we will start
with an arry but we will end up with a single value. In the below example we will add
up all the numbers from the 'numbers' array and conver it into a single value 

*/

// using the 'numbers' array from previous example. 

let total=numbers.reduce(function(total,current){
    
    return total+current;
})

console.log(total);   //78

/* We call reduce on our numbers array, and we pass in two arguments to it:

1) THE CALLBACK FUNCTION

2)INITIAL VALUE  (total)

We start our summing at an initial value of 0,  and our callback function  is 
responisbile for adding up each item in the array. 

The first argument contains the total value of all the actions you've done so far

The second argument is the familar current array item 

By using these two arguments, you can easily construct all sorts of scenarios involving 
keeping track of something 

More on the Callback Function Arguments

 We specified one argument representing the current array item for MAP and FILTER 
 and two arguments representing total value and the current item for REDUCE 

 Our call back functions hasve two optional argumetns you can specify 

 1) The current index position of your current array item 
 2) The array you are calling map,filter, or reduce on 

For MAP and FILTER, these would be the second and third arguments you specify 
For reduce it would be the third and fourth arguments. 

They are rarely used but good to be aware of your options

eg */

let words=["Where","do","you","want","to","go"];

let phrase=words.reduce(function(total,current,index){
    if (index==0){
        return current;
    }
    else{
        return total+" "+current;
    }


},"");

console.log (phrase);

/*
 We use this index value to special case the first word to deal with whether we insert 
 or not insert a space character at the beginning. 

A Short Foray into Functional Programming 

There is a huge thing these three methods ( MAP, FILTER, REDUCE) scratch the surface of. 
This is something known as FUNCTIONAL PROGRAMMING 

FUNCTIONAL PROGRAMMING is a way of writing your code wher eyou use functions that

1) Can work inside other functions 
2) Avoid sharing or changing state
3) Return the same output to the same input * 

( *Will not be affected by variables outside of the function )

Our callback functions meet these three criteria. 

They are functions that can be dropped into or out of any situation as long 
as the augments still works. 

They don't modify any state and they work fully inside the map,filter or reduce methods. 

*/
