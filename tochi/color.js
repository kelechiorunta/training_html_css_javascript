document.addEventListener("DOMContentLoaded", (ev) => {
  const colorInput = document.getElementById("color-input");
  const container = document.getElementsByTagName("div")[0];
  colorInput.addEventListener("change", function (e) {
    container.style.backgroundColor = e.target.value;
    console.log("Container", container);
  });
});
