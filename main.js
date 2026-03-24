
const result = document.getElementById("result");
const button = document.querySelector("button");
const input = document.querySelector("input[type='text']");

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `<p>Copyright © ${currentYear}</p>`;
});

button.addEventListener("click", function () {
  const value = parseFloat(input.value) || 0;
  result.textContent = factorial(value);
});

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}