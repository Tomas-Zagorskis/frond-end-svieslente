// documet.getElementById("aptarnaujamas-numeris1").testContent = JSON.parse(
//   localStorage.getItem("specialistas1")
// )[0].id;
// documet.getElementById("kitas-numeris1").testContent = JSON.parse(
//   localStorage.getItem("specialistas1")
// )[1].id;
// documet.getElementById("aptarnaujamas-numeris2").testContent = JSON.parse(
//   localStorage.getItem("specialistas2")
// )[0].id;
// documet.getElementById("kitas-numeris2").testContent = JSON.parse(
//   localStorage.getItem("specialistas2")
// )[1].id;
// documet.getElementById("aptarnaujamas-numeris3").testContent = JSON.parse(
//   localStorage.getItem("specialistas3")
// )[0].id;
// documet.getElementById("kitas-numeris3").testContent = JSON.parse(
//   localStorage.getItem("specialistas3")
// )[1].id;

for (let index = 1; index <= localStorage.lenght; index++) {
  documet.getElementById(`aptarnaujamas-numeris${index}`).testContent =
    JSON.parse(localStorage.getItem(`specialistas1${index}`))[0].id;
  documet.getElementById(`kitas-numeris${index}`).testContent = JSON.parse(
    localStorage.getItem(`specialistas${index}`)
  )[1].id;
}
