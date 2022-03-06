
/* 

DOM Elements Are Objects...Sort Of!

Our ability to use JavaScript to modify what gets shown by the browser is made possible because of 
one major detail. That detail is that every HTML tag, style rule, and other things that go into 
your page has some sort of a representation in the DOM.

To visualize what I just said, let's say we have an image element defined in markup:

<img src="images/lol_panda.png" alt="Sneezing Panda!" width="250" height="100"/>

When our browser parses the document and hits this image element, 
it creates a node in the DOM that represents it:
           
                          DOCUMENT 

                             V

                             HTML 
                                          V
                                         BODY      
         
                                     V        
                                    DIV        

                                    V                           
                                   img   <   img src="images/lol_panda.png" alt="Sneezing Panda!"
                                              width="250" height="100"/>

This DOM representation provides us with the ability to do everything we could have done in markup.
As it turns out, this DOM representation actually ends up allowing us to do more with our HTML
elements than we could have done using just plain old markup itself

The reason why our HTML elements are so versatile when viewed via the DOM is because they 
share a lot of similarities with plain JavaScript objects.

Our DOM elements contain properties that allow us to get/set values and call methods.
They have a form of inheritance that we saw a little bit about earlier where the functionality
of each DOM element provides is spread out across the Node, Element, and HTMLElement base types:

NODE   >    ELEMENT  >  HTMLELEMENT >  HTMLDListElement 
                                       HTMLBGSoundElement
                                       HTMLButtonElement
                                       etc etc etc

Despite all of the similarities, I need to provide the following disclaimer: 
the DOM was never designed to mimic the way Objects work.

Many of the things we can do with objects we can certainly do with the DOM, 
but that is because the browser vendors help ensure that.

The W3C specifications don't state that our DOM should behave identically
to how we may expect things to behave with plain old Objects

Let's Actually Modify DOM Elements  

*/

let headingElement1 = document.querySelector("#bigMessage");   //Findng element in the DOM 

headingElement1.textContent = "Oppa Gangnam Style!"; // Modifying the element in the Dom
                                                     // setting a property. 


            /*
Attribute Values 

One of the primary ways our HTML elements distinguish themselves is through their attributes 
and the values these attributes store. For example, the src and alt attributes 
are what distinguish the following three image elements:

<img src="images/lol_panda.png" alt="Sneezing Panda!"/>
<img src="images/cat_cardboard.png" alt="Cat sliding into box!"/>
<img src="images/dog_tail.png" alt="Dog chasing its tail!"/>

Every HTML attribute (including custom data-* ones) can be accessed via the properties the
DOM provides. To help us deal with attributes,our elements expose the somewhat self-explanatory
getAttribute and setAttribute methods.

The getAttribute method allows us to specify the name of an attribute on the element it is living on.
If the attribute is found, this method will then return the value associated with that attribute.
*/

let headingElement2=document.querySelector("h1");

console.log(headingElement2.getAttribute("id"));

console.log(headingElement2.getAttribute("class"));

/*

The opposite of getting the value of an attribute is to actually set the value. To set the value,
we would use the appropriately named setAttribute method.We use this method by calling setAttribute 
on the element that we want to affectand specifying both the attribute name as well as the value 
that attribute will store.

*/

let headingElement3 = document.querySelector("h2");

headingElement3.setAttribute("class","foo");    // If you 'comment this example, you will see
                                                // the colour and size has changed due to class will be different

console.log(headingElement3.getAttribute("class"));

/*We use this method by calling setAttribute on the element that we 
want to affect and specifying both the attribute name as well as the value   


The setAttribute function doesn't do any validation to ensure that the 
attribute we are setting is valid for the element we are setting it on.
 Nothing prevents us from doing something silly as follows:#
*/
 let headingElement4 = document.querySelector("h1");
 headingElement4.setAttribute("src", "http://www.kirupa.com");
 console.log(headingElement4.getAttribute("src"));  

/*

Our h1 element doesn't contain a src attribute, but we can get away
with specifying it. When our code runs, our h1 element will even sport 
the src attribute...probably very uncomfortably.

 In the examples for how to use setAttribute and getAttribute, I picked on id and class. 
 For these two attributes, we do have another way of setting them. 

Because of how common setting id and class attributes are, our HTML elements expose
the id and classNameproperties directly:

*/

let headingElement5 = document.querySelector("h3");
alert(headingElement5.id); 
headingElement5.className = "bar foo";
headingElement5.id="i have changed";
alert(headingElement5.id); 
console.log(headingElement5.getAttribute("class"));

/*

You can use either getAttribute and setAttribute  or id and className. 
No real difference between the two.   

Now, before we go further, I have to call this strange thing out: yes...
we can't use class in JavaScript for referring to the class attribute because
class has a whole different meaning that has to do with dealing with objects. 
That's why we are using className instead.

Our main takeaway from this tutorial is that the DOM changes we perform will almost always take one of the following two forms:

1) Setting a property

2) Calling a method


A property is a value that you can get or set (like changing the content of an HTML element).

A method is an action you can do (like add or deleting an HTML element).

The textContent, setAttribute, and getAttribute approaches we saw here cover both of those approaches.


