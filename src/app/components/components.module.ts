import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CabeceraComponent} from './cabecera/cabecera.component';
import {IonicModule} from '@ionic/angular';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {PopinfoComponent} from './popinfo/popinfo.component';



@NgModule({
  declarations: [
      CabeceraComponent,
      MenuComponent,
      PopinfoComponent
  ],
  /*para poder utilizarla en otras paginas exportaremos nuestra cabecera*/
  exports: [
      CabeceraComponent,
      MenuComponent,
      PopinfoComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,

    ]
})
export class ComponentsModule { }
