document.addEventListener("DOMContentLoaded", () => {
  // HTML <template> is the DOM’s prototype pattern
  const template = document.querySelector("template");
  // console.log("template", template);

  const divs = document.querySelectorAll(".container");
  console.log("divs", divs);

  const heading = document.createElement("h1");
  heading.textContent = "Hello World";
  document.body.append(heading);

  document.body.removeChild(heading);

  function makeCard(title, description) {
    const node = template.content.cloneNode(true);
    node.querySelector(".title").textContent = title;
    node.querySelector(".description").textContent = description;
    return node;
  }

  const container = document.querySelector(".container");

  container.append(makeCard("Card 1", "This is my first card"));
});
console.log(document)
