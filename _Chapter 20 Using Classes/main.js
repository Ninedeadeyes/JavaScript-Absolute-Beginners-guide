/* Using Classes 


You can think of a class as a template- a template objecxts refer to when they are being 
created. Let's say that we want to create a new class call Planet. The most basic 
version of the class will look as follow 

*/
class Planet{

}

/* As you can see our class is currently empty. To create an object based on this class, 
all you need to do is the following 
*/

let myPlanet= new Planet();

/* We declare the name of our object and use the 'new' keyword to create (aka INSTANTIATE) our 
object based on the Planet class. 



my planet            
[[Prototype]]  >    Planet.prototype
                    constructor >               Planet 
                                                Arguments 
                                                caller, length,name
                                            <   prototype
                    
                    
                    [[Prototype]]>              Object.Prototype
                                                [[Prototype]]> null 
                

When we create objects with the 'new' keyword, the following things happen: 

1) Our new object is simply of type Planet 
2) Our new obeject's [[Prototype]] is our new function or class prototype property
3) A constructor function gets executed that deals with initaliazing our newly created object


MEET THE CONSTRUCTOR 

The constructor is a function ( or method ) that lives inside your class's body. It is 
responsible for initalizing the newly created object and it does that by running any code 
contained inside it during object creation. 

This isn't an optinal details. All classes must contain a constructor function. If it doesn't 
contain one, JavaScript will automatically create an empty constructor for you. 

To define a constructor, we use a special 'constructor' keyword to create what is basically 
a function. Just like a function, you can also specify any arguments you would like to use. 


*/

class PlanetA {
    constructor (name,radius){
        this.name=name;
        this.radius=radius;
    }
}

let youPlanet= new PlanetA("Earth",6378);
console.log(youPlanet.name);  //Earth 

/*  Notice that the two arguments we need to set on our constructor are actually set
directly on the Planet class itself, when our youPlanet obeject gets created the 
constructor is run and the NAME and RADIUS values we passed in get set on our 
object. 

youPlanet
name 
radius             
[[Prototype]]  >    PlanetA.prototype
                    constructor >               PlanetA
                                                Arguments 
                                                caller, length,name
                                            <   prototype
                                               [[Prototype]]  > 
                    
                    
                    [[Prototype]]>              Object.Prototype
                                                [[Prototype]]> null 
                
Alternatively we can just use a 'function' for the same thing but other uses of the 
class syntax won't be as easy to convert using the more traditional approaches we have seen 
 
function PlanetA(name,radius){
this.name=name;
this.radius=radius;
}

let youPlanet= new Planet("Earth",6378)
console.log(youPlanet.name);  //Earth 


What goes inside the Class 

Our class objects look a lot like functions, but they have some quirks.  Aside from 
special constructor function. The only other thing that can go inside your class are 
other functions, methods, getters and setters. Thats it. No variable declarations 
and initialzation are permitted

*/

class PlanetB {
    constructor (name,radius){
        this.name=name;
        this.radius=radius;
    }

    getSurfaceArea() {
        let surfaceArea = 4 * Math.PI * Math.pow(this.radius, 2);
        console.log(surfaceArea+"square km!")
        return surfaceArea;
    }
    
    set gravity(value) {
        console.log("Setting Value")
        this._gravity = value;
    }
    
    get gravity() {
        console.log("Getting value")
        return this._gravity;
    }
      
}


let earth= new PlanetB("Earth",6378);
earth.gravity=9.81
earth.getSurfaceArea();
console.log(earth.gravity);  


/* Good example about how 'get and set works' with its console.logs within the gravity function. 

One cool thing about adding these things to our class body is that they all 
will not live on the created object. They will live on the prototype 

earth
name 
radius             
[[Prototype]]  >    PlanetB.prototype
                    constructor >                      PlanetB 
                    GetSurfaceArea                     Arguments 
                    get gravity                    <   prototype
                    set gravity                       [[Prototype]]  >  
                                                
                   
                    
                    [[Prototype]]>              Object.Prototype
                                                [[Prototype]]> null 


This is a good thing for we don't want every object to uncecessarily carry around 
a copy of the class's internals when a shared instance would work just fine. 

Why do the functions inside my class look weird 

When defining functions inside an object, you have a shorthand syntax you can use 

let blah {
    zorb: function(){
        // something interesting 
    }
} ;

You can abbreviate the zorb function definition as follows 

let blah {
    zorb(){
        // something interesting
    }
};

It is this abbreviated form that you will see and use when specifying functions inside
your class body. 

Extending objects 

The last thing we will look at has to do with extending objects in the class-based
world. To help with this, we are going to be working with a whole new type of planet
known as the Pototo Planet 

A pototo planet contains everything a regular planet brings to the table but is
made up entirely out of potatoes and hence has an additional augment. ( Potato Type)
and function. 

Instead of duplicating our code what if we had a way of extending the functionality our
PlanetB class provides ? 

We do have such a way via the 'extend' keyword. We can do something like the following 
*/

class PotatoPlanet extends PlanetB{

    constructor(name, width, potatoType) {
      super(name, width);
  
      this.potatoType = potatoType;
    }
  
    getPotatoType() {
      let thePotato = this.potatoType.toUpperCase() + "!!1!!!";
      console.log(thePotato);
      return thePotato;

    }

}

/* Notice we ar declaring our potatoePlanet but using the 'extends keyword' 
to specify the class we will be extending from. 

OTHER THING to keep in mind if we are going to be extending a class without 
needing to modify the constructor we can totally skip specifying the constructor 
inside a class 
eg:

class PotatoPlanet extends PlanetB{
    sayHello() {
        console.log("Hello!");
  }
}

In our case we are modifying what the constructor does by adding a property for the 
type of potato, we define our constructor again with one important addition 'potatoType' 
                             
 constructor(name, width, potatoType)  
                              
 We make an explicit call to the parent(PlanetB) constructor by using the 'super' keyword
 and passing in the relevant arguments needed. 

 The super call ensures that whatever the PlanetB part of our object needs as part of its 
 functioning is triggered. 

 To use our PotatoPlanet, we would create our object and populate its properties or call
 methods on it just like we would for any plain, non-extended object. 
 */

 let spudnik= new PotatoPlanet("spudnik",12411,"Russet");
 spudnik.gravity =42.1;
 spudnik.getPotatoType();
 console.log(spudnik.gravity);  

/* The cool thing is that spudnik has access to not only functionality we defined as part 
of our PotatoPlanet class, but all of the functionality provided by the PlanetB class. 

If we follow the prototype chain, we go from the spudnik object to the PotatoPlanet.prototype
to PlanetB.prototype to finally Object.prototype.  

Our spudnik has access to any property or method defined at any of these prototype stops which 
is why it can call things on Object or on PlanetB without skipping a beat. 

Conclusion 

While working with Object.create and the prototype properties gave us a lot of control, that 
control was often unnecessary for the majority of our cases. By working with classes, we trade
complexity in favor of simplicity. Generally speaking the simple solution usually turns out 
to be the right one. 

*/
