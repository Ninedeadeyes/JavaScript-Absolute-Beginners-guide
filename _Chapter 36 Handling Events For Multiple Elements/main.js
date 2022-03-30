
/*
Handling Events for Many Elements

In its most basic case, an event listener deals with events fired from a single element.

As you build more complicated things, the "one event handler for one element" 
mapping starts to show its limitation.

Each of these elements carries around data about an event listener and its properties 
that can really start adding up the memory usage when you have a lot of content. 
Instead, what you want is a clean and fast way of handling events on multiple elements 
with minimal duplication and unnecessary things

eg:

var oneElement = document.querySelector("#one");
var twoElement = document.querySelector("#two");
var threeElement = document.querySelector("#three");
var fourElement = document.querySelector("#four");
var fiveElement = document.querySelector("#five");
 
oneElement.addEventListener("click", doSomething, false);
twoElement.addEventListener("click", doSomething, false);
threeElement.addEventListener("click", doSomething, false);
fourElement.addEventListener("click", doSomething, false);
fiveElement.addEventListener("click", doSomething, false);
 
function doSomething(e) {
    var clickedItem = e.target.id;
    alert("Hello " + clickedItem);
}

To echo what I mentioned in the intro, the obvious reason is that you don't want to duplicate code.
The other reason is that each of these elements now has their addEventListener property set. 
This is not a big deal for five elements. It starts to become a big deal when you have dozens 
or hundreds of elements each taking up a small amount of memory. The other OTHER reason is
that your number of elements, depending on how adapative or dynamic your UI really is, 
can vary. It may not be a nice fixed number of five elements like we have in this contrived example.

A Good Solution

The good solution for this mimics the diagram you saw much earlier where we have just one event listener. 

Create a single event listener on the parent theDude element.

When any of the one, two, three, four, or five elements are clicked,
rely on the propagation behavior that events possess and intercept them 
when they hit the parent theDude element.


Stop the event propagation at the parent element just to avoid having to deal 
with the event obnoxiously running up and down the DOM tree.


                           WINDOWS   

                             V

                          DOCUMENT 

                             V

                            HTML 
                 V                           V
                HEAD                        BODY      
                                          <<<<<<<Stop the even going further here 
                                        V           V
           listent to even here>>>> The Dude     SCRIPT

                             V    V    V      v      v                     
                            one   two  three  four  five


*/

var theParent = document.querySelector("#theDude");
theParent.addEventListener("click", doSomething, false);
 
function doSomething(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        alert("Hello " + clickedItem);
    }
    e.stopPropagation();
}

/*

There is only one event listener, and that lonely creature is called doSomething.

This event listener will get called each time theDude element is clicked 
in addition to any children that get clicked as well. We only care about click 
events relating to the children, and the proper way to ignore clicks on this p
arent element is to simply avoid running any code if the element the click 
is from (aka the event target) is the same as the event listener target  


The target of the event is represented by e.target, and the target 
element the event listener is attached to is represented by e.currentTarget.
 By simply checking that these values not be equal, you can ensure that the
 event handler doesn't react to events fired from the parent element that 
 you don't care about.

 eg:e.target !== e.currentTarget) 

 To stop the event's propagation, we simply call the stopPropagation method


Notice that this code is actually outside of my if statement. 
This is because I want the event to stop traversing the DOM under
all situations once it gets overheard.

Because all of the event arguments are still tied to the source of the event, 
you can target the clicked element in the event handler despite calling 
addEventListener on the parent. The main thing to call out about this solution
is that it satisifies the problems we set out to avoid. You only created 
one event listener. It doesn't matter how many children theDude ends up having.
This approach is generic enough to accommodate all of em without any extra 
modification to your code.

*/
