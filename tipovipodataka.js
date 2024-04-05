//Primitivni Tipovi:
var godine = 24;
var ime = "Nikola";
var studira = true;
//Nizovi
var predmeti = ["EPOS", "KTEH", "CLOUD"];
var ocene = [10, 8, 7, 5, 9];
//Tuples
var tuple = ["Nikola", 20];
//Enum
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElektronskogPoslovanja"] = 0] = "TehnologijeElektronskogPoslovanja";
    Modul[Modul["SoftverskoInzenjerstvo"] = 1] = "SoftverskoInzenjerstvo";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeElektronskogPoslovanja;
//Objekat
var student = { ime: "nikola", godine: 20, studira: true };
//Unija tipova
var brojIliString = 10;
//Any tip
var biloSta = "Moze bilo koji tip";
//void
function cao() {
    console.log("cao");
}
//null undefined
var n = null;
var u = undefined;
var nekaVrednost = "Neki string";
var duzinaString = nekaVrednost.length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n, u);
console.log(duzinaString);
