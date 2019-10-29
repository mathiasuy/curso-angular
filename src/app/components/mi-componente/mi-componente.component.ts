import { Component } from "@angular/core";

@Component ({
    selector: 'mi-componente',
    templateUrl : "./mi-componente.component.html"
})

export class MiComponente{
    
    private titulo : string;
    private comentario : string;
    private year : number;

    constructor(){
        console.log("Componente mi-componente incicializado");
        this.titulo = "Componente 1";
        this.comentario = "Hola, soy el primer componente";
        this.year = 2010;
        console.log(this.titulo,this.comentario,this.year);
    }

}
