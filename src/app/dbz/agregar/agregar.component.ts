import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzModule } from '../dbz.module';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent   {

  

  @Input() nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }
  constructor(private dbzService:  DbzService){

  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); //emitir evento
  

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
 

    // esta emitiendo personaje
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    
    // limpiamos los datos
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}

  
