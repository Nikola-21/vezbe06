//Primitivni Tipovi:

let godine:number = 24;
let ime:string = "Nikola";
let studira:boolean = true;

//Nizovi

let predmeti:string[]=["EPOS", "KTEH", "CLOUD"];
let ocene:number[] = [10,8,7,5,9];

//Tuples

let tuple:[string,number] = ["Nikola", 20];

//Enum

enum Modul{
    TehnologijeElektronskogPoslovanja, SoftverskoInzenjerstvo, InformacioniSistemi
}
let modul:Modul = Modul.TehnologijeElektronskogPoslovanja;

//Objekat

let student:{ime:string,godine:number,studira:boolean} = {ime:"nikola", godine:20, studira:true};


//Unija tipova

let brojIliString:number | string = 10;

//Any tip

let biloSta:any = "Moze bilo koji tip";

//void
function cao():void{
    console.log("cao");
}

//null undefined
let n:null = null;
let u:undefined = undefined;


let nekaVrednost:any="Neki string";
let duzinaString:number = (nekaVrednost as String).length;  

console.log(godine,ime,studira);
console.log(predmeti,ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n,u);
console.log(duzinaString);