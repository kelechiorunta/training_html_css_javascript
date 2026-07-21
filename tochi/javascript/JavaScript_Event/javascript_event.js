

document.addEventListener('DOMContentLoaded', function() {
    const div = document.querySelector('div');
    div.addEventListener("click", function() {
        alert('Div clicked!');
    },{capture: true});
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
        alert('Button clicked!');
    },{bubbles: false});
});