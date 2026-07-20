# Beginner Task: Introduction to HTML Events

## Objective

Learn how HTML events work by using:

- Event Introduction
- Event Attributes
- Event Handlers
- DOM Event Listeners

---

## Task 1: Event Attributes

### Instructions

1. Create a button that displays the text **"Click Me"**.
2. When the button is clicked, change the text inside a paragraph from:

```
No button has been clicked.
```

to

```
The button was clicked!
```

> **Hint:** Use the `onclick` HTML attribute.

---

## Task 2: Event Handler Function

Instead of writing JavaScript directly inside the HTML attribute:

1. Create a JavaScript function named `showMessage`.
2. Connect the function to the button using the `onclick` attribute.
3. When the button is clicked, change the paragraph text to:

```
Welcome to JavaScript Events!
```

---

## Task 3: DOM Event Listener

Remove the `onclick` attribute completely.

Using JavaScript:

1. Select the button with `document.getElementById()`.
2. Attach a click event using `addEventListener()`.
3. Every time the button is clicked:
   - Change the paragraph text.
   - Change the button background color.
   - Change the button text to **"Clicked!"**.

---

## Bonus Challenge ⭐

Create another button labeled **Reset**.

When the Reset button is clicked:

- Change the paragraph back to:

```
No button has been clicked.
```

- Restore the first button's original background color.
- Change its text back to **"Click Me"**.

---

## Expected Skills

After completing this task, you should understand:

- What an event is.
- How HTML event attributes work.
- How to create event handler functions.
- How to attach events using `addEventListener()`.
- Why separating HTML and JavaScript using event listeners is considered best practice.
