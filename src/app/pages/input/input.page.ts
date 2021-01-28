import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
    nombre: string;

    usuario = {
      email: '',
      password: ''
    };
  constructor() { }

  ngOnInit() {
  }

  ejecutarSubmit() {
    console.log('Fomr ejecutado', this.nombre, this.usuario);
  }
}
