/* Getters and Setters 

The properties we have been working with so far are known as 'DATA PROPERTIES'. Outside of 
setting and reading a value there really isn't much more we can do. 

Now as part of reading and writing properties, what if we had the abilty to 

1) Maintain our existing syntax for reading and writing property values.
2) Gain the ability to run some custom code behind the scenes. 


As it turns out, we have the ability to do all of this. It is brought to you by another 
friendly and hardworking property varient known as 'ACCESSOR PROPERTY' eg:

*/

let zorb={
    message:"Blah",   // This is a data property 

    get greeting(){       // The next property is 'greeting' ('ACCESSOR PROPERTY')
        return this.message;     // which is broken up to two functions (get and set )
    },

    set greeting(value){    
        this.message=value;
    }

}
// What makes getter and setter special is that we don't access greeting as a function 
// We access it just like we would any old property. 

console.log(zorb.greeting);
zorb.greeting="Hola";
console.log(zorb.greeting);

/* Based on what we know so far, getter and setter are just fancy names for functions 
that behave like properties, when we try to read an ACCESSOR PROPERTY (zorb.greeting)
the getter function get called, similar to when we set a new value to our ACCESSOR PROPERTY 
the setter function gets called 

The full power of a getter and setter lies in the code we can execute when reading or 
writing a property BECAUSE WE ARE DEALING WITH FUNCTIONS UNDER THE COVERS, WE CAN RUN 
ANY CODE WE WANT. 

Shout Generator */

let shout={
    _message:"hello",

    get message(){
        return this._message
    },

    set message(value){
        this._message=value.toUpperCase();
    }

}

console.log(shout.message);
shout.message="This is sparta"
console.log(shout.message);

/* In our next example, we have our superSecureTerminal object that logs all usernames.

LOGGING ACTIVITY 

*/

let superSecureTerminal={
    allUserNames:[],
    _username:" ",
    
    showHistory(){
        console.log(this.allUserNames);
    },

   get usernames (){
        return this._username;
    },

    set username(name){
        this._username=name;
        this.allUserNames.push(name);
    }

}
//console.log(superSecureTerminal.usernames); add 'bob into _username 
// technically you do not need 'get' as it isn't used in the example 
let myTerminal=Object.create(superSecureTerminal);
myTerminal.username="Michael Gary Scott";
myTerminal.username="Dwight K Schrute";
myTerminal.username="Creed Bratton";

myTerminal.showHistory();

/* We are creating a new object called myTerminal that is based on the superSecureTerminal 
object. From here, we can do everything with the myTerminal Object and call it business as 
usual


Property Value Validation 

The last example we will look at is one where the setter do some validation on the values sent
to them. 

*/

let person={
    _name:"",
    _age:"",

    get name(){
        return this._name;
    },

    set name(value){
        if (value.length>2){
            this._name=value;
        }
        else{
            console.log("Name is too short!");
        }
    },
    get age(){
        return this._age;
    },

    set age(value){
        if (value<5){
            console.log("Too young");
        }
        else{
            this._age=value;
    }

    },

    get details(){
        return "Name:"+this.name+", Age: "+this.age;
    }

}

person.age=5;
person.name="Tom";
console.log (person.details);

person.age=2;
person.name="BOB";

console.log (person.details);

/* Being able to check if a value we assign to a property is good or nto is probably one 
of the best features that getters and setters bring to the table. */