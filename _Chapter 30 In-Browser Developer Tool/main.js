/* In-Browser Developer Tools 


Web development tools allow web developers to test and debug their code.
They are different from website builders and integrated development environments 
in that they do not assist in the direct creation of a webpage, rather they are tools 
used for testing the user interface of a website or web application.

To access 'the Developer Tools' you need to click CTRL+SHIFT+I 

The developer Tools provide you with the ability to : 

Inspect the DOM

Debug Javascript 

Inspect objects and view messages via the console 

Figure out performance and memory issues

See the network Traffic 

We are going to focus on the first 3. 

INSPECTING THE DOM 

The first Developer Tool feature we will look at is how you can inspect and even
manipulate the contents of your DOM. With Chrome launched, 
navigate to http://bit.ly/kirupaDevTool.

If you reload the page, you['ll see this page showing up with a different 
background color 

The first thing we'll do with this example is examine the DOM to see what is 
going on. Make sure Developer Tools are visible and ensure the Element TAB 
is selected 

What you will see is a view of your LIVE markup from the page that is 
currently shown. To be specific, this is A VIEW OF THE DOM. The importance
of this distinction is that this view provides you with a live version of 
what your page looks like. 

The VIEW SOURCE COMMAND simply gives you a view of the markup as stored in 
the HTML PAGE. ( right click, view source or click on source and the 
HTML PAGE in developer tools)

The difference between THE DOM view and view source 

The reason for the discrepancy betwen the two code views goes back to what the 
DOM represents. You DOM is the result of the browser and JavaScript having run 
to completion. It provides you with a fresh from the oven look that mimics what
your browser sees 

VIEW SOURCE is just a static representation of your document as it was on the server 
( or your computer)


DEBUGGING JAVASCRIPT 

Moving along, the other big thing that the developer tools bring to the table is 
debugging. 

The source tab gives you access to all the files that are currently being used
by your document. As the name implies you are looking at the raw content of these
files. 

What we want to do is examine what happesn when the code in LINE 21 is about to 
execute. To do this, we need to tell the browser to stop when Line 21 is about to 
get execute. The way to do that is by setting what is known as a BREAKPOINT. 

To set a breakpoint, click directly on the 21 label on the left gutter. 

At this point, a breakpoint has been set. The next step is to actually have your 
browser run into this breakpoint. (known as hitting the breakpoint). All we 
need to do is hit F5 to refresh the page.

If everything worked as expected you'll see your page load and suddenly pause
with line 21 getting highlighted. 

You are currently in  DEBUGGING MODE. The breakpoint you set on Line 21 has 
been hit. This mean your entire page ground to a screeching halt the moment 
the browser hit it. At this point, with your browser being in suspended animation,
you have the ability to fiddle with everything going on in your page. 

While in this mode, go back to Line21 and hover over the bodyElement variable. 
When you hover over it, you'll see a tooltip indicating the various properties and 
value that this particular object contains. 

You can then interact with the tooltip, scroll through all the objects and even 
dig deeper into complex objectsthat have more objects inside them. 

Because bodyElement is basically the JavaScript DOM representation of the body 
element, you'll see alot of properties that you encountered indirectly from our 
look at HTMLElement a few chapters ago. 

On the right side of your source view, you have more angles through which you 
can inspect your code. 

I won't be explaining what all of those categories do but I am pointing that area 
out just so you know that you have the ability to examine the current state of 
all your JavaScript variables and objects in much greater detail if you so wanted
to. 

The other big advantage a breakpoint provides is the abilty for your to step 
through your code just like your browser would. Right now, we are stuck on 
Line 21. To step through the code, click on the 'step into function call' button 
found on the right hand side 

Once you clicked that button, notice what happens, You will find yourself inside 
random.Color.js where the getRandomColor function has been defined. 

Keep clicking on the "step into function call" to continue stepping into your code
and going through each line of the getRandomColor function. 

Notice that you now get to see how the objects in your browser's memory update as you go 
line by line and execute the code sequentially. If you are tired of doing that, you can 
step back by clicking on the 'step out of current function' button that exits you out 
of this function. In our case, that is back to line 21.


If you want to execute yoru app without stepping through any more of the code, 
click on your PLAY button found a few pixels to the left of STEP INTO 

When you hit PLAY, your code will execute, If you happen to have another breakpoint 
set somewhere in your codes path , that breakpoint will also get hit. 
When stopped at any breakpoint, you can choose STEP INTO, STEP OUT or just resume 
execution with PLAY. Because we only set one breakpoint, hitting PLAY will just run the code
to completion and have your random color appear as the background for your body element 


To remove a breakpoint just click on the line number that you set the breakpoint on

To reiterate soemthing I mentioned at the beginning of this chapter. I am only scatching the 
surface of what is possible. 


MEET THE CONSOLE. 

the OTHER big DEBUGGING TOOL functionality we will look at is using what as known as the 
console. The console provides you with the ability to do several things. 

It allows you to see messages logged by your code. It also allow you to pass commands and 
inspect any object that is currently in scope. 

The console provides you with is the ability to inspect or call any object that exists in 
whatever scope your application is currently running in. With no break points sets, launching 
the console puts you in the global state. 

Inspecting Objects

Within Console, type in window and press enter. What you will see is an 
interative listing of all the things that live in your window object. 

You can start to type in any valid object or property and if it is in scope
you will be able to access it, inspect its value and even execute it 

This is by no means a read only playground. You can cause all sorts of mayhem 
For example, if you type in documen.body.remove()and press enter your entire 
document will just disappear. 

If you did end up deleting the body, just refresh the page to get back to your earlier state

Developer Tools primarily work with the in-memory representation of your page and don't
write back to source. 

Refresher on the scope/state 

I mentioned that your console allows you to inspect the world at whatever scop you 
are currently in. 

Let's say you have a breakpoint set at the following highlighted line 

let oddNumber=false;

function calculateOdd(num){
    if (num%2==0){
        oddNumber=false;
    }

    else{

        oddNumber=true;      HIGHLIGHTED LINE 
    }

    calculateOdd(3);

    When you run the code and the breakpoint gets hit, the value of OddNumber
    is still false. Your breakpointed line hasn't been executed yet and 
    you can verify this by testing the value of oddNumber in the Console. 

    Next let's say you run this code, hit this breakpoint and step through to the 
    next line. 

    At this point, your oddNumber value is set to true. Your console will now 
    reflect the new new value, for that is what the in-memory representation of 
    oddNumber states. The main takeaway is that your console's view of the world 
    is directly tired to where in the code you are currently focusing on. 

    
    This is especially made obvious when you are stepping through code and the scope
    you are in changes frequently. 


    Logging Messages 

    The last thing we will look at is the console's ability to log message from your 
    code. Remember all those time wher eyou did something like this 

    function doesThisWork(){
        alert("it works");
    }

    The 'this' being where we used an alert statement to print some 
    value or prove that the code is being executed. Well, we can stop doing that now

    By using the console, you have a far less annoying way of printing messages without
    interrupting everything with a model dialog box. 

        function doesThisWork(){
        console.log("it works");
    }

    




*/
