/* A deeper look at objects 

As we saw from the introduction to objects, the functionality that Object brings 
to the table is pretty minimal. It allows us to specify a bunch of named key and 
value pairs that we lovingly call PROPERTIES. 

CREATING OBJECTS 

The first thing we will look at is how to create an object. There are seveal ways. 

OBJECT LITERAL SYNTAX 

let funnyGuy={};

Instead of typing in new Object() we can initialize our object by saying {}. At the end 
of the line getting executed we will have created an object called funnyGuy whose type is 
Object. 

ADDING PROPERTIES 

There are several paths we can take to add properties on it. 

DOT NOTATION SYNTAX 
eg:
*/

let funnyGuy={};
funnyGuy.firstName="Conan";
funnyGuy.lastName="O'Brien";

let funnyFirstName=funnyGuy.firstName;
console.log(funnyFirstName);

// BRACKET NOTATION 

let funnyGuy2={};
funnyGuy2["firstName"]="Conan";
funnyGuy2["lastName"]="O'Brien";

let funnyLastName=funnyGuy2.lastName;
console.log(funnyLastName);

/*  Could use either but brackets are uniquely qualified for. That area is when we are dealing
with properties whose names we need to dynamically generate. In the above examples the property 
names are hardcoded. 
*/

let myObject={};

for( let i=0; i<5; i++){
    let propertyName="data"+i;

    myObject[propertyName]=Math.random()*100;

}
console.log(myObject);

/* We have an object called myObject- notice how we are setting properties on it. We don't have a
hardcoded list of property names, instead we create the property name by relying on the index values from 
our array. 

Once we have figured out the property name, we then use that data to create a property on 
myObject. 

What we have just seen is how to create an object and set properties on it in SEPERATE STEPS. 
If we know what properties we want to set from the beginning, we can combine some steps together 

*/

let funnyGuy3={
    firstName:"Conan",
    LastName:"O'Brien"
}

/* The end result of this code is identical to what we saw earlier where we created our first 
funnyGuy object.

There is yet another detail about adding properties that we should look at. By now we have 
looked at a variety of different objects that have properties whose values are made 
up numbers,strings, and so on but a property value can be another object itself. 

Take a look at the following colors object whose content property stores an 
object */

let color={
    header:"blue",
    footer:"grey",
    content:{
        title:"black",
        body:"darkgrey",
        sigature:"light blue"
    }

};

// If we want to  add a property to a nested object 'content' we can do this 

color.content.frame="yellow";

// If you prefer BRACKET NOTATIONS 

color.content["frame"]="yellow";

/* I mentioned at the beginning that you have several paths that you can take to add 
properties to an object. We looked at one such path. A more complex path that you can 
take could involve the Object.defineProperty and Object.defineProperties methods 

These methods allow you to set a property and its values but they allow you to do 
much more, Its definitely overkill for what we will want to do 99% of the time in 
the beginning but if overkill is what you want, the MDN DOCUMENTATIONS does a 
good job providing examples of how you can use them to add or many properties to an object

REMOVING PROPERTIES 

If we want to remove the footer property there are two ways of doing it depending 
on whether we want to access the footer property using BRACKET OR DOT NOTATION

*/

delete color.footer;

// or 

color.content.footer="black";    // add footer back in to delete 

delete color["footer"];

/* The key to making this work is the delete KEYWORD. 

This wouldn't be JavaScript if I didn't mention a caveat. This one has to do 
with performance. If you will be deleting alot of properties on a frequent basis
across a large number of objects, delete is much slower than just setting the
value of hte property to something like undefined
*/

color.content.footer="black"; 

color.footer=undefined;

//or 

color.content.footer="black"; 

color["footer"]=undefined;

// The flipside is that setting a property to undefined maean the property still exists
// in memory, you'll need to calculate the tradeoff ( speed vs memory) to optimise performance 

/* What is going on behind the Scenes (PROTOTYPICAL INEHERITANCE MODEL)

Because objects really are the core of what makes JavaScript do all of its
JavaScriptey things, it is important for us to have deeper understanding of 
what is happening. 

A large part of working with JavaScript is building objects based on other objects
and doing other traditional object-oriented things.  

Let start with an empty object, even though there are no properties defined objects
we create in JavaScript are automatically interlinked with the bigger Object and all
the funcationality it brings to the table.   */


let emptyObject={};

emptyObject.toString();   // toString() is within Object.prototype




/*


The 'link' allows us to call traditional Objects properties on 'emptyObject' like above
The link is actually known as a PROTOTYPE represented as [[Prototype]],that ends up
pointing to another object. Another object can have its own PROTOTYPE that points to another object.  All of this linking 
is known as the PROTOTYPE CHAIN. 

PROTOTYPE DEFINITION : Almost Every JavaScript object has an internal property which is linked 
to another object, that linked object is refer to as a prototype

With the PROTOTYPE CHAIN even if our object  doesn't have a particular property that we are looking 
for defined, JavaScript will walk through the chain and see if every stop along the way has 
that property defined instead. 



Creating Custom Objects 

Working with generic Object and putting properties on it serves a useful purpose, 
but its awaesomeness fades away really quickly when we are creating many objects that 
are basically the same thing 

*/

let strongGuy={
    firstName:"TOM",
    lastName:"BLUE",

    getName: function(){
        return "Name is: "+ this.firstName+" "+this.lastName;

    }
}

let theDude={
    firstName:"SAM",
    lastName:"RED",

    getName: function(){
        return "Name is: "+ this.firstName+" "+this.lastName;

    }
}

let detective={
    firstName:"JACK",
    lastName:"BLACK",

    getName: function(){
        return "Name is: "+ this.firstName+" "+this.lastName;

    }
}

/* At first glance there seems to be quite a bit of duplication going on. The firstName,
lastName properties will typically have a unique value per object. Keeping these duplicated
on each object makes sense whilst the 'getName' property, though act as a helper and 
doesn't contain anything one particula object will want to uniquely customize. 

Duplication this one doens't make sense, so we should look at making getName more general 
avilable without the duplication. 

The method to avoid such duplications is by creating an intermediate parent object 
that contains the generic properties. Our child objects can inherit from this parent 
object instead of inheriting from Object directly 

'person' is now a part of the prototype chain, happily nested between Object.prototype 
and our child objects.      child object > parent object > Object.prototype 

*/

let person={
    getName: function(){
        return "Name is: "+ this.firstName+" "+this.lastName;
    },

    getInitials:function(){  //*

        if (this.firstName && this.lastName){
            return this.firstName[0]+this.lastName[0];
        }
    }

};

let badGuy1= Object.create(person);
    badGuy1.firstName="LEE";
    badGuy1.lastName="PURPLE";

let badGuy2= Object.create(person);
    badGuy2.firstName="LOB";
    badGuy2.lastName="GREEN";


let badGuy3= Object.create(person);
    badGuy3.firstName="SIMON";
    badGuy3.lastName="YELLOW";

    let tod=badGuy3.getName();

    console.log(tod);

    let mod=badGuy3.getInitials();
    console.log(mod);


/* If we do decide to enchance our person object, we can do so just once and have any
objects that inherit from it benefit from our enchancement. 

 The this Keyword 

 One thing you may have noticed in our previous snippets is the use of the 'this' keyword
 Let go back to our person object and more specifically the 'getName' property. 

 When we run this we will get the first and last name of the object but there is no 
 existence of the firstName and lastName properties on the person object. 

 When a property doesn't exist we saw earlier that we walk down the prototype chain 
 from parent to parent. 

 In our case, the only stop on the chain would be Object.prototype. There is no existence of 
 the firstName or lastName properties on Object.prototype either. How is it that the getName
 method happesn to work and retrun the right values ? 

 The answer has to do with the 'this keyword' that precedes firstName and lastName. 

 The 'this' keyword refer to the object that our getName method is bound to. 

 The object is, in this case 'badGuy3' (example above) because that is the object that we are 
 using as the entry point to all of this prototype navigation. 

 At the point where the getName method is evaluated and the firstName and lastName properties 
 have to be resolved, the look up starts at whatever the 'this keyword' is pointing to. 

 This means our lookup starts with badGuy3 object, an object that turns out actually contains 
 the firstName and lastName. 

 






*/

