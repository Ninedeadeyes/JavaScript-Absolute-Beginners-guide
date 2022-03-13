/*
Creating, Removing, and Cloning DOM Elements

In this tutorial, we are going to cover the basics of what makes all of this work. 
We are going to look at how to create elements, remove elements, re-parent elements,
and clone elements.


Creating Elements

The way we can create elements is by using the createElement method.
The way createElement works is pretty simple. We call it via our document object 
and pass in the HTML tag name of the element we wish to create. In the following snippet,
 we are creating a paragraph element represented by the letter p:

 let myElement = document.createElement("p");

 The myElement variable holds a reference to our newly created element.

If we run this line of code as part of a larger app, it will execute and a p
element will get created. Creating an element is the simple part.We need to actually
place this element somewhere in the DOM, for our dynamically created p element is just 
floating around aimlessly right now

The reason for this aimlessness is because our DOM has no real knowledge that this
 element exists. In order for an element to be a part of the DOM, there are two things
  we need to do:

1) Find an element that will act as the parent

2) Use appendChild and add the element we want into that parent element

*/
let newElement = document.createElement("p");
let bodyElement = document.querySelector("body");

newElement.textContent = "Or do I exist entirely in your imagination?";

bodyElement.appendChild(newElement);

/*


Now, we are going to take a step back and look at what exactly is going on in our example.

let newElement = document.createElement("p");
let bodyElement = document.querySelector("body");

newElement.textContent = "Or do I exist entirely in your imagination?";

bodyElement.appendChild(newElement);

With newElement, we are storing a reference to our newly created p tag.
With bodyElement, we are storing a reference to our body element. On our newly created element
(newElement), we set the textContent property to what we ultimately end up displaying. 
The last thing we do is take our aimlessly floating newElement and parent it as a child 
of our body element by relying on good old appendChild.

Below is a visualization of what the DOM for our simple example looks like:


                           WINDOWS  

                             V

                          DOCUMENT 

                             V

                            HTML 
                 V                           V
                HEAD                        BODY      
         
           V          V                 V     V      V                         
         TITLE      STYLE              h1   script   p < newly added element  
  
         
Now, a detail about the appendChild function is that it always adds the element to the 
end of whatever children a parent may have.  With that said, we do have control over the
exact order where under a parent a particular element will live.

*/

let newElement2 = document.createElement("p");
let scriptElement = document.querySelector("script");

newElement2.textContent = "Using insertBefore example .";

bodyElement.insertBefore(newElement2, scriptElement);


/*

If we want to insert newElement directly after our h1 tag, we can do so by calling the insertBefore
function on the parent. The insertBefore function takes two arguments. The first argument is
the element you want to insert. The second argument is a reference to the sibling
(aka child of a parent) you want to precede.


                           WINDOWS  

                             V

                          DOCUMENT 

                             V

                            HTML 
                 V                           V
                HEAD                        BODY      
         
           V          V                 V     V      V                         
         TITLE      STYLE              h1   script   p < newly added element  

Notice that we call insertBefore on the bodyElement and specify that newElement should be 
inserted before our script element.Our DOM in this case would look as follows:

                           WINDOWS  

                             V

                          DOCUMENT 

                             V

                            HTML 
                 V                             V
                HEAD                          BODY      
         
           V          V                 V     v       V      V                         
         TITLE      STYLE              h1     p      script   p 
                                          newElement2



There isn't a widely supported built-in way of inserting an element AFTER an element instead of
before it. What we can do is trick the insertBefore function by telling it to insert an element
an extra element ahead.
*/


let newElement3 = document.createElement("p");
let h1Element = document.querySelector("h1");

newElement3.textContent = "next sibling example.";

bodyElement.insertBefore(newElement3, h1Element.nextSibling);

/*

The above code will insert "newElement3" between  h1 and 'newElement2' 

What if there is no sibling element to target? Well, the insertBefore function 
in that case is pretty clever and just appends the element you want to the end 
automatically.

Handy Dandy Function

If for some reason you find yourself wanting to insert elements after another sibling 
all the time, then you may want to use this function to simplify your life a bit:

*/


function insertAfter(target, newElement) {
  target.parentNode.insertBefore(newElement, target.nextSibling);
}


let newElement4 = document.createElement("p");

newElement4.textContent = "The Handy Dandy Function.";

insertAfter(h1Element, newElement4,);

/*
A more generic way of adding children to a parent is by realizing that parent
elements treat children like entries in an array. To access this array of children, 
we have the children and childNodes properties. The children property only returns HTML
elements, and the childNodes property returns the more generic nodes that represent a
lot of things that we don't care about



Removing Elements

In this section, we are going to look at removeChild which, given its slightly 
unsavory name, is all about removing elements.


*/

let newElement5 = document.createElement("p");

newElement5.textContent = "remove example.";

bodyElement.appendChild(newElement5);

bodyElement.removeChild(newElement5);

/*

The p element stored by newElement is being added to our body element by the appendChild method.
We saw that earlier. To remove this element, we call removeChild on the body element and pass
in a pointer to the element we wish to remove. That element is, of course, newElement5. 
Once removeChild has run, it will be as if your DOM never knew that newElement existed.

The main thing to note is that we need to call removeChild from the parent of the child 
we wish to remove. This method isn't going to traverse up and down our DOM trying to
find the element we want to remove. Now, let's say that we don't have direct access
to an element's parent and don't want to waste time finding it. We can still remove 
that element very easily by using the parentNode property as follows:

*/

bodyElement.appendChild(newElement5);

newElement5.parentNode.removeChild(newElement5);

/*
Now, there is a newer, shinier, and better way to remove an element. In this way,
we just call theremove method on the element we wish to remove directly. T
his example looks as follows:

*/

bodyElement.appendChild(newElement5);

newElement5.remove();

/*

Now, why am I not beginning and ending this conversation around removing elements with the 
remove method? It has to do with browser support. This approach is still fairly new,
so older browsers like Internet Explorer don't have support for it.
 
 If supporting Internet Explorer is important for you, then the other approaches we've
looked at will work will.

If you are looking for a universally accepted approach for removing elements, despite 
some minor quirks, the removeChild function is quite merciless in its efficiency. 
If you want something direct, remove is your friend. 

Both of these approaches have the ability to remove any DOM element - 
including ones that were created in markup originally.

We aren't limited to removing DOM elements we dynamically added. If the DOM element 
we are removing has many levels of children and grandchildren, all of them will be removed 
as well.

Cloning Elements

The one remaining DOM manipulation technique we need to be aware of is one that revolves 
around cloning elements where we start with one element and create identical replicas of it:

The way we clone an element is by calling the cloneNode function on the element we wish to 
clone along with providing a true or false argument to specify whether we want to clone 
just the element or the element and all of its children. 

*/
let item = document.querySelector("h1");

let clonedItem = item.cloneNode(true);

// add cloned element to the DOM
bodyElement.appendChild(clonedItem)

      
/*

Regarding the cloneNode function 

If true, then the node and its whole subtree, 
including text that may be in child Text nodes, is also copied.

If false, only the node will be cloned. The subtree, 
including any text that the node contains, is not cloned.

*/

let newElement6 = document.createElement("p");

newElement6.textContent = "clone example .";

function sayWhat() {
  let clonedText = newElement6.cloneNode(true);
  bodyElement.appendChild(clonedText);
}

setInterval(sayWhat, 1000);

/*

We call cloneNode on our newElement6. The result of us doing this is that a copy of our 
textElement is now created and stored as part of the clonedText variable. 
The last step is for us to add our newly cloned element to the DOM so that it shows up. 
Thanks to our setInterval, all of the code under sayWhat repeats to keep adding our
 cloned element to the page.

We are calling cloneNode with the true flag to indicate we want to clone all of the 
children as well. Why? Our paragraph element doesn't seem to have any children, right?
Well...this is where the distinction between elements and nodes comes into play. 
Our paragraph tag doesn't have any child elements, but the text wrapped by the p tag
is a child node. This detail is important to keep in mind when you find yourself 
cloning something and finding that you don't exactly get what you want when you specify
that children shouldn't get cloned.

Conclusion

With everything you've learned here, there is nothing preventing you from starting off
with a completely empty page and using just a few lines of JavaScript to populate 
everything inside it  ( click on example.html )

Just because you can do something like this doesn't mean you always should.
The main problem with dynamically creating content is that search engines,
screen readers, and other accessibility tools often have difficulty knowing what to do.
They are more familiar with content specified in markup than they are with things
created using JavaScript. Just be aware of that limitation if you ever decide
to get over-enthusiastic with dynamically modifying your DOM.

 */