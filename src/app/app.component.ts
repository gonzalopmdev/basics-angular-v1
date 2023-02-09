import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Variables declarations
   public title: string;;
   numero: number;
   base: number;

  // Inicialiting variables in the CONSTRUCTOR
   constructor(){
      this.title = "App Contador";
      this.numero = 10;
      this.base = 5;
   }

   acumular(valor: number){
    this.numero += valor;
   }
}
