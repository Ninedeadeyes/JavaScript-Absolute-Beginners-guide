/*

All About JSON (aka JavaScript Object Notation)

When it comes to storing, retrieving, or transmitting data, there are a bunch of file formats and data 
structures that you can use eg : Excel spreadsheets, text files etc etc. 
On the web front, there is one format that reigns supreme over all others.
That format is known as JSON - short for JavaScript Object Notation.

What is JSON?

In JavaScript, you have a way of defining objects using the object literal syntax:

let funnyGuy = {
    firstName: "Conan",
    lastName: "O'Brien",
 
    getName: function () {
        return "Name is: " + this.firstName + " " + this.lastName;
    }
};
 
let theDude = {
    firstName: "Jeffrey",
    lastName: "Lebowski",
 
    getName: function () {
        return "Name is: " + this.firstName + " " + this.lastName;
    }
};

On the surface, the object literal syntax looks like a bunch of brackets and colons and
weird curly braces that define your object's properties and values. Despite how weird it looks,
under the covers, it is fairly descriptive. Many of the common data types you would want to use
are available. You can neatly represent their properties and values as key and value pairs 
separated by a colon. Equally important as all the other stuff I just mentioned,
this syntax allows you to have structure and nested values.

The JSON format borrows heavily from this object literal syntax. Here is an example 

  exampleJSON.  */ 
{
    "firstName": "Kirupa",     // string
    "lastName": "Chinnathambi",   //string
    "special": {            //Object
        "admin": true,     // Boolean
        "userID": 203     // numbers 
    },
    "devices": [                 // Array
        {
            "type": "laptop",     //string
            "model": "Macbook Pro 2015"   //string 
        },
        {
            "type": "phone",     // string
            "model": "iPhone 6"  //string
        }
    ]
}

/*

A JSON object is nothing more than a combination of property names and their values.
That seems pretty simple, but there are some important details that we need to go over in this 
section.

Property Names: Property names are the identifiers you will use to access a value. Visually, 
they are the things to the left of the colon character:  eg: firstName 

Notice how the property names are defined. They are string values wrapped in quotation marks.
The quotation mark is an important detail that you don't have to specify in the object literal case
for property names, so don't forget to include them when working in the JSON world!

The Values

Each property name maps to a value, and the types of values you can have are:

Numbers
Strings
Booleans (true or false)
Objects
Arrays
Null

Reading JSON Data

Anyway, almost all of your interactions with JSON will revolve around reading data. 
When it comes to reading JSON data, the main thing to keep in mind is that it is very similar 
to reading values stored inside a typical JavaScript Object. 


You can either dot into the value you want (property.propertyFoo) or you can use
the array approach (property["propertyFoo"]) and access the value that way.

The only very VERY minor complication you'll run into is when working with more complex values 
made up of Objects and Arrays. To read a value stored inside an Object, just keep dotting into each
property until you reach the property that stores the value you are interested in.

eg: 

exampleJSON.special.userID

Arrays are no different, but you will eventually have to switch into array notation once you get to 
the property that stores your array values. If we wanted to access the model value of the first
 device in the devices array, we can type something that looks as follows:

 eg: 

 exampleJSON.devices[0].model


 Because the devices property refers to an array, you can also perform 
 stereotypical array-like operations such as the following:

let devicesArray = exampleJSON.devices;

for (let i = 0; i < devicesArray.length; i++) {
  let type = devicesArray[i].type;
  let model = devicesArray[i].model;



Parsing JSON-looking Data into Actual JSON

Your JSON data could be coming from a variety of different sources,

Many will return JSON data as raw text. You will have something that looks like a JSON object, 
but you can't interact with the data like you would when you are working with a real JSON object.

To deal with this, you have the JSON.parse method that takes your "fake" JSON data as its argument:

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);   //  this line 
        selectInitialState(response.region);
    }
}

Parse method takes whatever JSON-looking data that you end up with and converts
it into a real JSON object that you can work with more easily.

Writing JSON Data?

As it turns out, writing JSON data just isn't all that popular unless you are saving
JSON data to a file or doing something with web services. If you are doing either of these tasks,
you are doing development on Node or writing code in a programming language other than JavaScript.

For front-end development, I can't think of too many cases where information on writing JSON
would be useful.

*/