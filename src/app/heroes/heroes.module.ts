import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    //que componente tiene en este module
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //que cosa visible fuera este module
    exports: [
        ListadoComponent
    ],
 
    imports: [
        CommonModule //si estoy utlizando *ngFor o *ngIf
    ]


})


export class HeroesModule{}