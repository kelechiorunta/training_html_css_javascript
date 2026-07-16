# Beginner JavaScript DOM API Tasks

## Task 1: Accessing HTML Collections with `document.getElementsByTagName()`

### Objective

Learn how to access multiple elements of the same HTML tag and iterate through them.

### HTML

```html
<ul>
  <li>Apple</li>
  <li>Orange</li>
  <li>Mango</li>
  <li>Banana</li>
</ul>
```

### Tasks

1. Select all the `<li>` elements using `document.getElementsByTagName()`.
2. Log the collection to the console.
3. Log the total number of list items.
4. Use a loop to print the text of every list item.
5. Change the text of the first list item to **"Watermelon"**.
6. Change the text color of the last list item to **blue**.

---

## Task 2: Manipulating Elements with `setAttribute()`

### Objective

Learn how to modify HTML element attributes dynamically.

### HTML

```html
<img src="cat.jpg" alt="Cat">
<a href="#">Visit Website</a>
```

### Tasks

1. Select the `<img>` element.
2. Change its `src` attribute to `"dog.jpg"`.
3. Change its `alt` attribute to `"Dog Image"`.
4. Select the `<a>` element.
5. Set its `href` attribute to `"https://developer.mozilla.org"`.
6. Make the link open in a new tab by setting the appropriate attribute.
7. Log all the attributes of the anchor element.

---

## Task 3: Styling Elements with `classList`

### Objective

Learn how to add, remove, toggle, and check CSS classes.

### HTML

```html
<div id="card" class="card">
    Product Card
</div>
```

### CSS

```css
.card {
    padding: 20px;
    border: 1px solid gray;
}

.active {
    background: lightgreen;
}

.hidden {
    display: none;
}
```

### Tasks

1. Select the `<div>` element.
2. Add the class `active`.
3. Remove the class `card`.
4. Toggle the class `hidden`.
5. Check whether the element contains the class `active`.
6. Log the element's complete list of classes.

---

## Task 4: Creating Elements with `document.createElement()`

### Objective

Learn how to create and insert new HTML elements into the page.

### HTML

```html
<div id="container"></div>
```

### Tasks

1. Create a new `<h2>` element.
2. Set its text to **"JavaScript DOM Practice"**.
3. Append it inside the `container`.
4. Create a `<p>` element with the text:

   > "Learning the DOM is fun!"
5. Append it below the heading.
6. Create a `<button>` with the text **"Click Me"**.
7. Append the button inside the container.

---

## Task 5: Build a Simple Product Card

### Objective

Practice creating and modifying multiple DOM elements.

### HTML

```html
<div id="products"></div>
```

### Tasks

Using only JavaScript:

1. Create a `<div>` to represent a product card.
2. Give it the class `product-card`.
3. Create an `<img>` element and set its `src`.
4. Create an `<h3>` for the product name.
5. Create a `<p>` for the product description.
6. Create another `<p>` showing the price.
7. Create a **Buy Now** button.
8. Append everything to the product card.
9. Finally, append the product card into the `products` container.

---

## Bonus Challenge

Create three product cards using an array of products.

Example:

```javascript
const products = [
  {
    name: "Laptop",
    price: 1200
  },
  {
    name: "Phone",
    price: 650
  },
  {
    name: "Headphones",
    price: 150
  }
];
```

### Tasks

1. Loop through the array.
2. For each product:

   * Create a card.
   * Add a title.
   * Add a paragraph showing the price.
   * Add a **View Product** button.
3. Append every card to the page.
4. Add a CSS class named `product-card` to every generated card using `classList.add()`.
