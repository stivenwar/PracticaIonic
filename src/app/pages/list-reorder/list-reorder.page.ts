import { Component, OnInit } from '@angular/core';
import {from} from 'rxjs';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Iron Man', 'Thor', 'Capitán America' , 'Viuda Negra' , 'Hulk' , 'Ojo de Alcón' ];
  constructor() { }

  ngOnInit() {
  }

  reorder(event: any) {
    console.log(event);
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }
}
