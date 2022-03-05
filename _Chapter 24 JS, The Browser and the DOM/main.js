
/* 

JavaScript, the Browser, and the DOM

For starters, the stuff you put into your HTML documents revolves around HTML, CSS, and JavaScript.
 We treat these three things as equal partners in building up what you see in your browser:

Each partner has an important role to play, and the role each one plays is very different.

HTML Defines the Structure

Your HTML defines the structure of your page

To transform your content from something plain and drab to something appealing, you have CSS.

CSS is your primary styling language that allows you to give your HTML elements 
some much needed aesthetic and layout appeal

For the longest time, between HTML and CSS, you had everything you needed to create an
awesome looking and functioning page. You had structure and layout. You had navigation.
You even had simple interactions such as mouse overs. 


It's JavaScript Time!

For all the great things HTML and CSS had going for them, they were both limited in how much 
interactivity they provided. People wanted to do more on a web document than just passively
 sit back and observe what is going on

 JavaScript is now a perfectly capable language that allows you to add the sorts of interactive 
 things that people are looking for. All of these capabilities are accessed by the DOM.

Meet the Document Object Model (aka the DOM)

The Document Object Model (DOM) is a programming interface for web documents. 
It represents the page so that programs can change the document structure, style, and content.
The DOM represents the document as nodes and objects; that way, programming languages can 
interact with the page.

Below is a very simplified view of what the DOM for our earlier example would look like:

                           WINDOWS   ( Not a true member of DOM but good for visualisation)

                             V

                          DOCUMENT 

                             V

                            HTML 
                 V                           V
                HEAD                        BODY      
         
           V   V      V     V            V           V 
          META,META, TITLE, LINK        DIV        SCRIPT

                                    V    V    V                         
                                   img   div  h1 
                            

Your DOM is actually made up many kinds of things beyond just HTML elements.
Everything that makes up your DOM is more generically known as nodes.

These nodes can be elements (which shouldn't surprise you), attributes, text content, 
comments, document-related stuff, and various other things 

Almost always, the only kind of node we will care about is the element kind because
that is what we will be dealing with 99% of the time.

Every HTML element you want to access has a particular type associated with it, 
and all of these types extend from the Node base that make up all nodes. 

Your HTML elements are at the end of a chain that starts with Node and continues
with Element and HTMLElement before ending with a type (ie: HTMLDivElement,etc.)

NODE   >    ELEMENT  >  HTMLELEMENT >  HTMLDListElement 
                                       HTMLBGSoundElement
                                       HTMLButtonElement
                                       etc etc etc
                                    
The Window Object ( Not a true member of DOM )

In the browser, the root of your hierarchy is the window object. The Window Object
deals with your browser window. All properties and event relate to browser (tab)

The Document Object

Now, we get to the document object. Here is where things get interesting, and it is also where you
and I will be focusing a lot of our time on:

The document object is the gateway to all the HTML elements that make up what gets shown. 

The thing to keep in mind is the document object does not simply represent a read-only version
of the HTML document. It is a two-way street where you can read as well as manipulate 
your document at will.

Any change you make to the DOM via JavaScript is reflected in what gets shown in the browser. 

This means you can dynamically add elements, remove them, move them around, modify attributes 
on them, set inline CSS styles. 

Outside of the very basic HTML needed via a script tag to get some JavaScript to run 
in a HTML document, you can construct a fully functioning page using nothing but 
JavaScript if you felt like it. 

Other important aspect of the document object has to do with events. If you want to react to 
a mouse click/hover, checking a checkbox, detecting when a key was pressed, and so on, 
you will be relying on functionality the document object provides for listening to and reacting 
to events.

Conclusion

The DOM is the single most important piece of functionality you have for working with your
HTML documents. It provides the missing link that ties your HTML and CSS with JavaScript.
It also provides access one level up to your document and window objects

*/