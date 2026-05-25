CSS Assessment
Section A — Objective Questions (Choose the correct answer)
1. CSS Typography

Which CSS property is used to change the spacing between lines of text?

A. font-weight
B. line-height
C. letter-spacing
D. text-transform
Ans.B

2. CSS Background

Which CSS value creates a smooth transition between colors?

A. background-color
B. background-image
C. linear-gradient
D. background-repeat
Ans.C

3. CSS Position

Which position value places an element relative to its nearest positioned ancestor?

A. static
B. fixed
C. absolute
D. sticky
Ans.C

4. CSS Box Model

Which property controls the space inside an element between the content and border?

A. margin
B. outline
C. padding
D. width
Ans. C

5. CSS Display

Which display value allows elements to appear side-by-side while still accepting width and height?

A. block
B. inline
C. none
D. inline-block
Ans.D

Section B — Theory Questions
1. CSS Typography

Explain the difference between font-size, font-weight, and line-height. Give one example for each.

<!-- a). Font-size controls how big or small letter appears Eg. 
p {
  font-size: 24px;
} -->
<!-- b). Font-weight controls the thickness or boldness of text.
h1 {
  font-weight: bold;
}
c). Line-height: controls the space between lines of text.
p {
  line-height: 2;
} -->


2. CSS Background

Write CSS code to create a full-page linear gradient background from dark blue to black.

body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(to bottom, darkblue, black);
}

3. CSS Position

Describe the difference between relative, absolute, and fixed positioning in CSS.

a) Relative Positioning: it makes an elemnet to stay in stay in its normal position in the document while allowing it to be moved about 
b) Absolute Positioning: It allows an element to be positioned to the nearest positioned ancestors
C)Fixed Positioning: Allows an element to be positioned relative to the viewport. It stays visible and fixed during scrolling.

4. CSS Box Model

Explain the CSS box model and list its four main parts in order from inside to outside.

Box Model is a concept in CSS that describes how every HTML element is displayed as a rectangular box on a webpage.
The order ia as follows
a. Content
``` @
b. padding
c. border
d. Margin

5. CSS Display

Differentiate between display: flex, display: grid, and display: block. State one use case for each.

a) Display Flex: This type of display creates a flexbox container for arranging items in one direction which can appear in row or column.
Commonly used in Navigation Bar of a webpage
b) Display Grid: This type of display arranges items in row and columns 
commonly used in dashbord layout of a webpage
c) Display block: This type of display arranges elements vertically 
commonly used in page sections of webpage