

// Where should your code live 

/* You can either arrange your code where they are in their seperate files like we have been doing 
 or put them all in the same one 
 eg 

 <html>

<head>

     <style>

        CSS code 

     </style>

</head>

<body>

    HTML code

    <script>

        JavaScript code 

    </script>

</body>

</html>

You can also use a hybrid approach where we can mix both approaches into an HTML document

Scripts, Parsing and location in document

You browser parses your HTML page starting at the top and then moves down line by line. 
When a script tag get hit, your browser starts executing the code that is contained 
inside the script tag Eveything else that your page might be doing takes a backseat while
the execution is going on. If script tag reference an external JavaScript file, your 
browser first download the external file before starting to execute its contents 

Because of how your browser parses the page and blocks everything while your scripts are executing 
you want to place your script tags towards the bottom of the HTML document after all of your 
HTML elements. 

If you place the script tag towards the top it will result in users seeing an unresponsive 
HTML page. 



So What approach to use ? 

 depends on if identical code going to be used across multiple HTML documents ? 

 If yes then probably want to put your code in an external file and then reference 
 it across all of the HTML pages. ( Avoid code repeatation, also reduce file size)

 Even if the answer is 'no' you can do whatever you want. 

*/




