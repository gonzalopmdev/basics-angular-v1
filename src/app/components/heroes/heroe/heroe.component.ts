import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  nombre: string;
  edad: number;

  constructor(){
    this.nombre = 'Iron Man';
    this.edad = 45;
  }

  //Get y Set 
  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  //Methods

  obtenerNombre(): string{
    return `${ this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void{
    this.edad = 23;
  }
}
