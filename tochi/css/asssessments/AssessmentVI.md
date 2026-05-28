Section B — Theory Questions

1. What is the purpose of the viewport meta tag in responsive web development?
ANS. Viewpoint meta tag is used to control how a webpage is displayed and scaled on different screen sizes, especially on mobile devices.

2. Differentiate between:
   justify-content
   align-items
in Flexbox.
ANS. justify-content, is the property that aligns the flex items along the main axis horizontally
Align-items, is the property that aligns flex-item vertically

3. Explain the difference between:
   flex-direction: row
   flex-direction: column
ANS> Flex-direction:row is the property that arranges flex items horizontally left to right.
Flex-direction:column is the property that arranges flex items vertically top to bottom.

4. What is the effect of using:
   flex-wrap: wrap;
inside a flex container?
ANS> The flex-wrap property is used in Flexbox to control whether flex items should stay on one line or move to the next line when there is not enough space.

Section D — Code Correction

5. Fix the issues in the code below:

<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
</div>
.container {
  display: flex;
  justify-content: center;
  align-item: center;
  flex-wrap: no-wrap;
}
Questions
Identify TWO errors.
Rewrite the corrected CSS.
Explain the effect of the corrected properties.
ANS>Wrong: align-item
no-wrap
Correct:
 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}



<!-- PLEASE create a html and css for this challenge in the css_responsiveCSS folder -->

Task 3 — Flexbox Alignment Challenge

6. Create a full-screen hero section that contains:

A heading
A paragraph
A button
Requirements

Center all content:

Horizontally
Vertically

using Flexbox only.

The section must:

Occupy full viewport height
Remain centered on all screen sizes

<!-- PLEASE DONT ATTEMPT THIS FOR NOW -->

6. Explain how media queries improve responsive layouts.
   Section C — Practical Assessment
   Task 1 — Responsive Navigation Bar

Create a responsive navigation bar that:

Uses Flexbox
Displays links horizontally on desktop
Stacks links vertically on mobile devices
Includes the viewport meta tag
Requirements
Use:
display: flex
justify-content
align-items
gap
Mobile breakpoint:
max-width: 768px
