import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[];
  heroeBorrado: string;
  
  
  constructor(){
    this.heroes = ['Iron Man', 'Hulk', 'Spiderman', 'HawkEye', 'BlackWidow'];
    this.heroeBorrado = "";
    
  }

  //Methods
  borrarHeroe(){
     const heroeBorrado = this.heroes.pop() || '';
     this.heroeBorrado = heroeBorrado;
  }

  

}
