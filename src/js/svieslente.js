let stulpeliai = "";

for (let index = 1; index <= localStorage.length; index++) {
  stulpeliai += `<div class="stulpelis">
      <div class="specialistoVardas">
        <span id="specialistoVardas">${localStorage.key(index - 1)}</span>
      </div>
      ${
        index == 2
          ? "<h2>Dabar</h2>"
          : "<h2 style='visibility:hidden'>nera</h2>"
      }
        <div class="aptarnaujamasNumeris">
          <h1><span class="aptarnaujamas-numeris">${
            JSON.parse(localStorage.getItem(localStorage.key(index - 1)))[0].id
          }</span></h1>
          </div>
          ${
            index == 2
              ? "<h2>Sekantis</h2>"
              : "<h2 style='visibility:hidden'>nera</h2>"
          }
        <div class="kitasNumeris">
          <h2><span class="kitas-numeris">${
            JSON.parse(localStorage.getItem(localStorage.key(index - 1)))[1].id
          }</span></h2>
        </div>
      </div>`;
}
console.log(stulpeliai);
document.getElementById("svieslente").innerHTML = stulpeliai;
