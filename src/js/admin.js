let html = "";
for (let index = 1; index <= localStorage.length; index++) {
  html += `<option value=${localStorage.key(index - 1)}>${localStorage.key(
    index - 1
  )}</option>`;
}
document.getElementById("specialistuSarasas").innerHTML = html;

// pridedam klienta pas specialista.
// @export
document
  .getElementById("pridetiKlienta")
  .addEventListener("click", pridetiKlienta);
function pridetiKlienta() {
  const specialistas = document.getElementById("specialistuSarasas").value;
  musuCallBack(specialistas);
  // specialistas.idetiIeile()
}
function musuCallBack(n) {
  n.pridetiKlienta();
}
