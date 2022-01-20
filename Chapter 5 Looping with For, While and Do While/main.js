// The For Loop 

//A for loop allow us to repeatedly run some code until an expression we specify returns false 

for (let i=0; i<10;i++){
    saySomething();
}

function saySomething(){
    document.writeln("Say hello");
}

/* for (start_point; condition;step){
   code to execute;
}

Start_point : A variable (I) is initalized to 0

Step: In this stage, we specify how our starting point will evolve i++ means for every loop 
(iteration) our variable will increase by one 

condition: This determines when the loop will stop running.  If I is less than 10, it will remain 
true hence the loop with continue whilst if the I is more than 10, condition becomes false and will 
terminate. 


Some for Loop Examples 

Break a loop : Sometimes we may want to end our loop before it reaches complection.The way 
we end a loop is by using a break keyword. */


for (let i=0; i<100;i++){
    document.writeln(i);

    if (i==45){
        break;
    }
}

/* Skipping an Iteration : There will be moment when we want to our loop to skip its current
iteration and move on the next one */

let floor=28;

for (let i=1; i<=floor;i++){
    if (i==13){
        continue;
    }

    document.writeln("At floor: "+i+"<br>");
}


// Going Backwards: There is no why our start point has to being with 0, they can start with 
// a number and every step it decreases  eg :  (for let i=25; i>0; i--)

// You don't have to use Numbers: for example : ( for let i="a"; i !="aaaa"; i+="a")
// if I is not "aaaa" then true, until a=="aaaa" then i is not "aaaa" is false and break loop 


// Oh no he didn't : You don't have to fill out the three section of your for loop in 
// in order to make it work as long as in the end, you msatify the loop's terminating conditions

let i=0;
let yay=true;

for(;yay;){
    if (i==10){
        yay=false;
    }
    else{
        i++;
        document.writeln("strange");
    }

}

//The While Loop: The while loop repeats some code until its condition(another expression)
//returns false 

let count=0;      //start

while (count<10){     //condition
    document.writeln("looping away");
 
    count++;   //step
}

// The do.. While Loop : The main difference between while it is gurantee to at least loop once 
// because the conditional expression is evaluated only after one iteration. 
let count2=0;

do{
    document.writeln("testing,testing <br>")
    count2++;

} 

while (count2<10);

