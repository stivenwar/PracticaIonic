import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  /*creamos la variable input para utilizarla es una variable especial*/
  @Input() titulo: string;
  constructor() { }

  ngOnInit() {}

}
