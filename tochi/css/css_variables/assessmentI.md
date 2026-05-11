Challenge: Variables
Test your understanding of CSS by completing a small coding challenge.

Instructions
Inside the editor, complete the following steps:
In :root, define --primary as #04AA6D and --text as white
On the .btn, use var(--primary) for background-color and var(--text) for color
On the .header, use var(--primary) for background-color

<!DOCTYPE html>
<html>
<head>
<style>
:root {
  /* define --primary and --text */
}

.header {
padding: 15px;
/_ use var(--primary) _/
}

.btn {
padding: 10px 20px;
border: none;
cursor: pointer;
/_ use var(--primary) and var(--text) _/
}
</style>

</head>
<body>

<div class="header">My Website</div>
<p><button class="btn">Click Me</button></p>

</body>
</html>
