import { Component } from "@angular/core";

@Component ({
    selector: 'mi-componente',
    templateUrl : "./mi-componente.component.html"
})

export class MiComponente{
    
    private titulo : string;
    private comentario : string;
    private lblMostrarPeliculas : string;
    private year : number;
    private mostrarPeliculas : boolean;

    constructor(){
        console.log("Componente mi-componente incicializado");
        this.titulo = "Componente 1";
        this.comentario = "Hola, soy el primer componente";
        this.year = 2010;
        this.mostrarPeliculas = true;
        this.lblMostrarPeliculas = "Ocultar pelicluas";
        console.log(this.titulo,this.comentario,this.year);
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = !this.mostrarPeliculas;
        this.lblMostrarPeliculas = this.lblMostrarPeliculas=="Ocultar pelicluas"?"Mostrar pelicluas":"Ocultar pelicluas";
    }

}
