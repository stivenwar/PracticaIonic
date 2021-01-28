import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CabeceraComponent} from './cabecera/cabecera.component';
import {IonicModule} from '@ionic/angular';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
      CabeceraComponent,
      MenuComponent
  ],
  /*para poder utilizarla en otras paginas exportaremos nuestra cabecera*/
  exports: [
      CabeceraComponent,
      MenuComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
    ]
})
export class ComponentsModule { }
