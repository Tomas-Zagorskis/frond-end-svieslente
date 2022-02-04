class Fifo {
  constructor(specialistoVardas) {
    // įdedame į localStorage sąrašą vardu this.specialistoVardas, po kableliu eina eina saugoma info
    //this.atmintis = localStorage.setItem(this.specialistoVardas, JSON.stringify(this.importJSON()));
    //importJSON();
    // this.index = 1;
    this.specialistoVardas = specialistoVardas;
  }
  idetiIeile() {
    //sukuriame kintamajį getMasyvasFromAtmintis ir į jį iš localstorage sąrašo paimame this.specialistoVardas reikšmę
    let getMasyvasFromAtmintis = localStorage.getItem(this.specialistoVardas);
    //keičiame į masyvo tipą iš string
    if (getMasyvasFromAtmintis == null || getMasyvasFromAtmintis === "[]") {
      localStorage.setItem(this.specialistoVardas, JSON.stringify([{ id: 1 }]));
    } else {
      getMasyvasFromAtmintis = JSON.parse(
        localStorage.getItem(this.specialistoVardas)
      );
      //masyve pridedame naują elementą, kuriame yra objektas saugoma reikšme id
      // getMasyvasFromAtmintis.push({
      //   "id:": getMasyvasFromAtmintis[getMasyvasFromAtmintis.length - 1],
      // });
      getMasyvasFromAtmintis.push({
        id:
          JSON.parse(localStorage.getItem(this.specialistoVardas))[
            JSON.parse(localStorage.getItem(this.specialistoVardas)).length - 1
          ].id + 1,
      });
      //masyvą papildytą nauju elementu paverčiame į string tipą: JSON.stringify(getMasyvasFromAtmintis)
      //ir išsaugome į localstorage this.specialistoVardas
      localStorage.setItem(
        this.specialistoVardas,
        JSON.stringify(getMasyvasFromAtmintis)
      );
    }
    //padidiname indeksą vienetu sekančiam svečiui;
    // this.index++;
  }
  isimtiIsEiles() {
    let getMasyvasFromAtmintis2 = JSON.parse(
      localStorage.getItem(this.specialistoVardas)
    );
    getMasyvasFromAtmintis2.shift();
    localStorage.setItem(
      this.specialistoVardas,
      JSON.stringify(getMasyvasFromAtmintis2)
    );
    //this.atmintis
  }
  dabarPasSpecialista() {
    return JSON.parse(localStorage.getItem(this.specialistoVardas))[0];
  }
  sekantisPasSpecialista() {
    return JSON.parse(localStorage.getItem(this.specialistoVardas))[1];
  }
  importJSON() {
    fetch("./src/import-data.json")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        return localStorage.setItem(
          // this.specialistoVardas,
          "specialistas1",
          JSON.stringify(myJson)
        );
      });
  }
}

const specialistas1 = new Fifo("specialistas1");
const specialistas2 = new Fifo("specialistas2");
const specialistas3 = new Fifo("specialistas3");
document
  .getElementById("newClient")
  .addEventListener("click", specialistas1.importJSON);

// console.log(JSON.parse(localStorage.getItem(this.specialistoVardas)));
// specialistas1.idetiIeile();
// specialistas1.idetiIeile();
// specialistas1.idetiIeile();
// console.log(JSON.parse(localStorage.getItem(this.specialistoVardas)));
// specialistas1.isimtiIsEiles();
// console.log(specialistas1.atmintis);
// console.log(specialistas1.dabarPasSpecialista());
// console.log(specialistas1.sekantisPasSpecialista());

// //-------------------
// //cookies/slapuko sukūrimas
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
// //perrašyti cookio info, svarbu kad sutaptų cookio name, šiuo atvėju username
// document.cookie = "username=John Smith; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";

// //pasiimti cookio reikšmę yra komplikuota, nes info saugoma stringe, kurį visą reikia "apdoroti"
// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
// // kreipiames į getCookie('cookio vardas') kad gauti reikšmę
//   console.log(getCookie("username"));

// //kad ištrinti cookie reikalinga nurodyti pasenusia galiojimo data
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// //pasetinam/sukuriam sesionstorage
// sessionStorage.setItem("Labas", "Pasauli");
// //gauti sessionStorage info
// console.log(sessionStorage.getItem("Labas"));
