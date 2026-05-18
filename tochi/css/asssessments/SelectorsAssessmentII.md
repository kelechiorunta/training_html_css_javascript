<!-- CSS Selectors Assessment Task 2
Objective

Practice using:

Tag selectors
ID selectors
Class selectors
Attribute selectors
Combinator selectors
Pseudo-class selectors
Pseudo-element selectors

You will style a simple product landing page.

Starter HTML -->

Tasks
1. Using the Tag Selector

Target all <h1> elements.

Requirements:

Change the font size
Change the text color
Center the text

Example:

h1 {
  color: navy;
}

2. Using the ID Selector

Target the #hero section.

Requirements:

Add a background color
Add padding
Center all content

3. Using the Class Selector

Target .product-card.

Requirements:

Add a border
Add padding
Add margin
Add rounded corners

4. Using the Attribute Selector

Target only the email input.

Requirements:

Add a blue border
Add padding
Change background color

Example:

input[type='email'] {
  border: 2px solid blue;
}

5. Using the Combinator Selectors
  a. Descendant Selector

Target all buttons inside .products.

.products button {
}

Requirements:

Change button background color
Change text color


Child Selector

Target direct children inside .products.

.products > .product-card {
}

Requirements:

Set width
Display inline-block

Adjacent Sibling Selector

Target the paragraph immediately after <h1>.

h1 + p {
}

Requirements:

Make the text italic
Change text color

6. Using the Pseudo-Class Selectors
Hover

When hovering over .buy-btn:
Change background color
Change cursor

Example:

.buy-btn:hover {
}

Focus

When an input is focused:

Remove outline
Change border color

Example:

input:focus {
}

First Child

Style the first product card differently.

.product-card:first-child {
}

Requirements:

Change background color
7. Pseudo-Element Selector

Add text before product prices.

Example:

.price::before {
  content: 'Price: ';
}
Bonus Challenges
Bonus 1

Style every even product card.

.product-card:nth-child(even) {
}

Bonus 2

Add a decorative line after the subtitle.

.subtitle::after {
  content: '';
}
Expected Learning Outcome

By completing this task, you should understand:

How to target HTML elements using selectors
How IDs differ from classes
How combinators select nested elements
How pseudo-classes respond to user interaction
How pseudo-elements insert generated content

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Selectors Practice</title>
    <style>
    :root{
      --primary-color: green;
    }



      <!-- element selctor, tageting all the <h1> -->
      h1{
        font-size: 30px;
        color: green;
        text align: center;
      }

<!-- ID selector, targets an element with an ID attribute hero -->
      #hero{
        background-color: purple;
        padding: 30px;
        text-align: center;
      }
      <!-- class selectors targets elements using a class attribute with the value product-card -->
      .product-card{
        border: 40px;
        padding: 30
        margin: 20px
        border-radius: 30px;
      }
      <!-- An Attribute Selector, tageting element based on there attribute values -->
      input[type=email] {
        border-color: blue;
        padding: 30px;
        background-color: pink;
      }

      product button{
        background-color: yellow;
        color: purple;
      }

      product > product-card{
        width: 50px;
        display: inline-block
      }

      h1 + p{
        font: italics;
        color: red;
      }
      buy-btn:hover{
        background-color: gray;
        color: black;
      }

      input:focus {
        outline: none;
        border-color: orange;
      }

      .product-card:first-child{
        background-color: green;
      }






    </style>

    <link rel="stylesheet" href="style2.css" />
  </head>

  <body>
    <header id="hero">
      <h1>Tech Gadget Store</h1>

      <p class="subtitle">
        Discover the latest gadgets and accessories.
      </p>

      <button class="shop-btn">Shop Now</button>
    </header>

    <section class="products">
      <div class="product-card">
        <img
          src="https://via.placeholder.com/200"
          alt="Headphones"
        />

        <h2 class="product-title">Wireless Headphones</h2>

        <p class="price">$120</p>

        <button class="buy-btn">Buy</button>
      </div>

      <div class="product-card featured">
        <img
          src="https://via.placeholder.com/200"
          alt="Smart Watch"
        />

        <h2 class="product-title">Smart Watch</h2>

        <p class="price">$250</p>

        <button class="buy-btn">Buy</button>
      </div>
    </section>

    <section class="newsletter">
      <h3>Subscribe</h3>

      <form>
        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <button type="submit">Subscribe</button>
      </form>
    </section>

    <footer>
      <p>© 2026 Tech Gadget Store</p>
    </footer>
  </body>
</html>
