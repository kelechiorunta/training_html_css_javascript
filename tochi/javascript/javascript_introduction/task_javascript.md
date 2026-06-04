JavaScript is a programming language used to make websites interactive and dynamic, Without JavaScript, a webpage is mostly static.

Examples of what JavaScript can do:

1. Show pop-up messages
2. Validate forms
3. Create image sliders
4. Build calculators etc.

There are three main ways to connect JavaScript to an HTML document.

1. Inline JavaScript
JavaScript is written directly inside an HTML element using event attributes such as onclick, onmouseover, etc.

EXAMPLE:
<button onclick="alert('Hello World!')">
    Click Me
</button>

2. Internal JavaScript

JavaScript is written inside a <script> tag within the HTML file.

Example
<!DOCTYPE html>
<html>
<head>
    <title>Internal JS</title>
</head>
<body>

    <h1>Welcome</h1>

    <script>
        alert("Hello from Internal JavaScript!");
    </script>

</body>
</html>


3. External JavaScript (Recommended)

JavaScript is stored in a separate .js file and linked to the HTML document.
EXAMPLE:
<!DOCTYPE html>
<html>
<head>
    <title>External JS</title>
</head>
<body>

    <h1>Welcome</h1>

    <script src="script.js"></script>

</body>
</html>

OR

<head>
    <script src="script.js"></script>
</head>