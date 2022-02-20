

/* Extending Built in Functions 

You'll often find that you want to do more and go farther than what built-in objects allow. 

The below function will shuffle an array. I would say this is so useful the shuffling ability 
should be a part of the Array object and be as easily accessible as push,pop, slice. 

*/

function shuffle(input) {
    for (let i = input.length - 1; i>=0; i--) {
        
        let randomIndex = Math.floor(Math.random()*(i+1));
        let itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;


    }
    return input;
}

let shuffleArray=[1,2,3,4,5,6,7,8,9,10];

alert(shuffleArray);
shuffle(shuffleArray);
alert(shuffleArray);

/*

To help with this, we are going to look at a combination of sample code and diagrams all involving the 
very friendly Array Object

let tempArray=[1,2,3,4,5,6,7,8,9,10];



If you were to diagram the full hierachy of the tempArray object




tempArray            
[[Prototype]] >   Array.prototype          
                  constructor      >    Array        
                                   <    prototype
                                        [[Prototype]]  >   
                               
                               
                  [[Prototype]]  >      Object.prototype
                                         [[Prototype]]  
              
              
We have our tempArray object that is an instance of Array.prototype which is 
in turn, an instance of the basic Object.prototype.

Now, what we want to do is exten what our array is cacable of with our shuffle function
which mean to insert it into the Array.prototype

We don't have access to the code that makes up all of the array functionality but there is
another approach by attaching functionailty to the Array object's prototype property.

Notice that our shuffle function is declared on Array.prototype. The function no longer
takes an argument for referencing the array you need shuffled, instead because this function 
is now part of the Array, the 'this' keyword inside the function body points to the array 
that needs shuffling. 

*/


Array.prototype.shuffle=function() {
    let input=this;

    for (let i = input.length - 1; i>=0; i--) {
        
        let randomIndex = Math.floor(Math.random()*(i+1));
        let itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;


    }
    return input;
}

let tempArray=[1,2,3,4,5,6,7,8,9,10];

alert(tempArray);
tempArray.shuffle();
alert(tempArray);

/* Once we run this code, our shuffle function will find itself shoulder to shoulder 
with all of the other built in methods. Best of all, any new arrays create will also 
have access to the shuffle functionality. 

Extending Built-in Objects is Controversial 

As it turns out, extending built-in objects is a bit controversial. 


A) You don't control the Built in Object's Future 

There is nothing preventing a future implementation of JavaScript from including your 
own version of shuffle that applies to Array Object. At this point, you have a collision 
where your version of shuffle and the browser's version of shuffle are in conflict with 
each other. 

You can name the object something very unique like your 'name' and the functionality 
to prevent conflict eg: kwongShuffle


B) Some Functionality should not be extended or Overrideen 

Nothing prevents you from using what you've learned here to modify the behaviour of 
existing methods and properties. You are able to break existing functionality 








 


