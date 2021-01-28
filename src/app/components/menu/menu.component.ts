import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Componente} from '../../interfaces/interface';
import {DataService} from '../../services/data.service';

@Component({
  /*selector para cargar en otro sitio el componente*/
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;
  /*inyecsion de servicios para usarlo*/
  constructor(private dataService: DataService) { }

  ngOnInit() {
    /*cargamos la informacion y creamos la funcion getMenu en dataService*/
    this.componentes = this.dataService.getMenuOpts();
  }

}
