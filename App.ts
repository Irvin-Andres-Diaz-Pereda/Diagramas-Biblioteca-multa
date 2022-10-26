import { Autor } from "./Autor";
import { copia } from './copia';
import { Libro } from "./Libro";
import { Lector } from "./lector";

const Carlos=new Autor ("Carlos Alberto ", "Esapñol", " 4/01/2006","Python","Accion","trillas", "2006" )
console.log(Carlos);

const Python=new Libro ("Las maravillas de la POO","Educativo","trillas","2011")
console.log(Python);
const Typescript=new Libro("Lo increible de las clases","Eduactivo","Santillana","2010")
console.log(Typescript);

const Andres= new Lector ("123","Andres Diaz", "2741342910", "Calle airista s/n entre torneros y herreros","678")
console.log(Andres);
const Juan = new Lector ("111","Juan Lopez","2741678910","Agrarista","890")
const Cop=new copia ("20/10/2022");
Cop.agregarcopia("2",Python,Andres);

Cop.agregarcopia("5",Typescript,Juan)
console.log (Cop.Listacopias());