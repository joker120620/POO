//array asosoativo
const arrTalentos={'uno':'juan', 'dos':'pedro', 'tres':'cata'};
//Object.keys(arrTalentos)
//(3) ['uno', 'dos', 'tres']
//Object.values(arrTalentos)
//(3) ['juan', 'pedro', 'cata']
//Object.keys(arrTalentos).length
//3

//array con objeto

const Talentos=[];
Talentos['uno']='juan';
Talentos['dos']='pedro';
Talentos['tres']='cata';

//Object.keys(Talentos).length
//3

//objeto literar
const Talento={
    nombre:'max',
    nivel: 'principiante',
    conocimiento: 'FrontEnd'
};

const administrador={
    nombre:'Pepe',
    permisos:'edicion y lectura',
    id:'12345678',
    email:'admin@gmail.com',
    pass:'passAdmin'
};
administrador['estado']="activo";
const estudiantes =[
    {
        nombre:'dam lee',
        edad:34
    },
    {
        nombre:'chun lee',
        edad:36
    },
    {
        nombre:'Yun lee',
        edad:25
    }
];
//sumar edades
const suma =estudiantes.reduce((anterior, actual)=>{
    return anterior + actual.edad;
},0);
console.log(`la suma de las edades es ${suma}`);
//buscar el numero mayor
const mayor=estudiantes.reduce((ant, act)=>{
    if(act.edad>ant){
        return act.edad;
    }
    else{
        return ant;
    }
},0);
console.log(`la mayor de las edades es ${mayor}`);
//Forma 2 de crear un objeto

let talent = new Object();
talent.name = "max";
talent.level = "Beginner";
talent.knowledge = "Frontedn"

console.log(talent);
Object.values(talent); //valores
Object.keys(talent); //propiedades
Object.getOwnPropertyNames(talent) //propiedades
Object.keys(talent).length; //tamaño

//funcion para crear un objeto
function fntalento(){
    this.nombre = "max"
    this.nivel = "principiante"
    this.method = function(){}
}

//instancia 1
let untalento = new fntalento()
console.log(untalento)

//instancia 2 de la funcion fntalentos cambio valores de atributos

let dostalento = new fntalento()
dostalento.nombre = "anna"
dostalento.nivel = "avanzado"

//patron de diseño singleton 
let talentocoex = new function(){
    this.nombre = "max"
    this.nivel = "principiante"
    this.method = function(){}
}
console.log(talentocoex)
//const tal = new talentocoex() //no se puede instanciar


//clase animal
const animales={
    nombre:'akira',
    raza:'beagle',
    ladrar:function() {
        console.log("guau guau");
    }
}

//funcion constructora
//function Animal(nombre,raza){
 //   this.nombre = nombre;
   // this.raza = raza;
    //this.sonido = function() {
      //  console.log("guau guau");
    //}
//}
// creando objeto con instancia
//const perro = new Animal('akira','pitbull');
//const gato = new Animal('Salome','Siamés');
//gato.sonido=function() {
    //console.log("miau miau");
//}


//forma correcta de crear una funcion constructora solo con propiedades
function Animal(nombre,raza){
    this.nombre = nombre;
    this.raza = raza;
};
//prototype
Animal.prototype.sonido = function() {
    console.log("guau guau");               
}
//instancia animal
const perro = new Animal('akira','pitbull');
Animal.prototype

// 2da instancia Animal + nuevo parametro
Animal.prototype.edad=10;
const perroDos = new Animal('bato','beagle');
perroDos.edad

//Destructuracion
let{nombre,raza} = perroDos
console.log(nombre); //bato
console.log(raza); //beagle

// crear clase
class Animales{
    constructor(nombre,raza){
        this.name = nombre;
        this.breed = raza;
        this.age= edad;
    }
    obtenerInfo(){
        return `el nombre del animal es ${this.name} y la raza es ${this.breed}`
    }   
}
//crear clase 
class  trabajadores{
    constructor(edad, nombre) {
      this.edad = edad;
      this.nombre = nombre;
    }
  }

//traer datos de html 
const nombreT= document.querySelector("#nombre").value;
const age= document.querySelector("#age").value;
const btn= document.querySelector("#CrearObj");
btn.addEventListener('click' , (evento)=>{
    evento.preventDefault();
    const trabajador= new trabajadores(age, nombreT);
    console.log(trabajador);
})

/////////////////////////////////////////////////////////////
//ejemplo de herrencia en clases

class pc{
    constructor(nombre, id){
        this.nombre=nombre;
        this.id=id;
    }
    verDatos(){
        return console.log(`El nombre del pc es ${this.nombre} y el id es ${this.id}` );
      };
}
class cpu extends pc{
    constructor(nombre, id, tarjetaMadre , fuentePoder ){
        super(nombre, id);
        this.tarjetaMadre= tarjetaMadre;
        this.fuentePoder= fuentePoder;
        
}
    verComponentes(){
        return console.log(`Tarjeta madre ${this.tarjetaMadre} id ${this.id}, fuente de poder ${this.fuentePoder} id ${this.id}. ` );
    }
}
class tarjetaMadre extends pc{
    constructor(nombre, id, ram, os , procesador ){
        super(nombre,id);
        this.prosesador= procesador;
        this.ram=ram;
        this.os=os;
    }
    espTarjetaMadre(){
        console.log(`La tarjeta madre posee ${this.ram} de ram con el id ${this.id}, un procesador ${this.procesador} con el id ${this.id}, y una OS ${this.os} con el id ${this.id}`)
    }
}




//crear Nueva instancia pc
//instancia cpu
//instancia tarjeta madre
//const asus= new pc('asus',20221021);
//const cpuPower200= new cpu ('asus',20221021,'TargetMather2000', 'power200');
//const tarjetaMadre200= new tarjetaMadre('asus',20221021,'16GB', 'Windows' ,'Ryzen 5');
//Object.values(tarjetaMadre)

//////////////////////////////////////////////////////////////7

class dog extends Animales{
    #raza
    constructor(nombre,edad,color,raza){
        super(nombre,raza,edad)
        this.color = color
        this.#raza = raza;
    }
    getraza(){
        return this.#raza;
    }
    setraza(raza){
        this.#raza = raza;
    }
}
const mydog2 = new dog("luna",2,"blanco","criolla");

//set es el nombre a cambiar
mydog2.setraza("lobo siberiano");
//get es el nombre que se va a mostrar
mydog2.getraza();
mydog2.raza = "pincher"