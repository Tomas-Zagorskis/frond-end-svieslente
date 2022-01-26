import * as data from "../";

class Fifo {
  constructor() {
    // įdedame į localStorage sąrašą vardu "atmintis", po kableliu eina eina saugoma info
    this.atmintis = localStorage.setItem("atmintis", JSON.stringify([]));
    this.importJSON();
    this.index = 1;
  }
  idetiIeile() {
    //sukuriame kintamajį getMasyvasFromAtmintis ir į jį iš localstorage sąrašo paimame "atmintis" reikšmę
    let getMasyvasFromAtmintis = localStorage.getItem("atmintis");
    //keičiame į masyvo tipą iš string
    getMasyvasFromAtmintis = JSON.parse(localStorage.getItem("atmintis"));
    //masyve pridedame naują elementą, kuriame yra objektas saugoma reikšme id
    getMasyvasFromAtmintis.push({ "id:": this.index });
    //masyvą papildytą nauju elementu paverčiame į string tipą: JSON.stringify(getMasyvasFromAtmintis)
    //ir išsaugome į localstorage "atmintis"
    localStorage.setItem("atmintis", JSON.stringify(getMasyvasFromAtmintis));
    //padidiname indeksą vienetu sekančiam svečiui;
    this.index++;
  }
  isimtiIsEiles() {
    let getMasyvasFromAtmintis2 = JSON.parse(localStorage.getItem("atmintis"));
    getMasyvasFromAtmintis2.shift();
    localStorage.setItem("atmintis", JSON.stringify(getMasyvasFromAtmintis2));
    //this.atmintis
  }
  dabarPasSpecialista() {
    return JSON.parse(localStorage.getItem("atmintis"))[0];
  }
  sekantisPasSpecialista() {
    return JSON.parse(localStorage.getItem("atmintis"))[1];
  }
  importJSON() {
    fetch("./src/js/import-data.json")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        return localStorage.setItem("atmintis", JSON.stringify(myJson));
      });
  }
}

const specialistas1 = new Fifo();
console.log(specialistas1.atmintis);
specialistas1.idetiIeile();
specialistas1.idetiIeile();
specialistas1.idetiIeile();
specialistas1.idetiIeile();
specialistas1.idetiIeile();
specialistas1.idetiIeile();
console.log(specialistas1.atmintis);
//specialistas1.isimtiIsEiles();
console.log(specialistas1.atmintis);
console.log(specialistas1.dabarPasSpecialista());
console.log(specialistas1.sekantisPasSpecialista());
