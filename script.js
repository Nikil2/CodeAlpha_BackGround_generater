const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const gradientButton = document.getElementById('gradientButton');
const resultDiv = document.querySelector('.result');
const body = document.body;

gradientButton.addEventListener('click', () => {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    resultDiv.textContent = `Background: linear-gradient(to right, ${color1}, ${color2});`;
});
