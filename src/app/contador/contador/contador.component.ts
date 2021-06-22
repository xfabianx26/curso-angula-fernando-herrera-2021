import { Component } from "@angular/core";


@Component({
     selector: 'app-contador',
     template: `
     
         <h1>{{title}}</h1>

        <button (click)="acumulador( base )">+{{base}}</button>

        <h3>La base es: <strong>{{numero}}</strong></h3>



        <button (click)="acumulador(base * -1)">-{{base}}</button>

     `
    
           


})
   
export class ContadorComponent {
    title: string = 'Contador de la aplicación';

  numero: number = 0;
  base  : number = 5;

  acumulador( valor: number ){
    this.numero += valor;
  }

}