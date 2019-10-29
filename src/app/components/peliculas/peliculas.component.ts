import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})


/*
Hooks (o eventos del ciclo de vida de un componente)
Evento que se ejecuta en un momento dado del ciclo de vida de un componente.
Son eventos o métodos que se van a lanzar dependiendo del ciclo o el estado de vida de un componente
Se van a lanzar dependiendo del estado de vida de un componente.
Ejemplo : Al producir un cambio, destruirlo, etc
*/

//El OnInit es uno de los metodos del cilco de vida, 
export class PeliculasComponent implements OnInit {

  constructor() { 
    //Aca no deberia ir logica, solo asignar valores a las propiedades y precargar cosas necesarias
    console.log("Constructor lanzado");
  }
  
  //Hay que implementarlo aqui. 
  //Sejecuta cuando cargamos las directivas de  nuestros componentes o cuando cargamos su etiqueta
  //Se ejecuta despues de lanzar el constructor
  ngOnInit() {
    console.log("Evento OnInit lanzado");
    console.log("Componente iniciado");
  }


  //Se lanza primero el construcor y luego el componente
}
