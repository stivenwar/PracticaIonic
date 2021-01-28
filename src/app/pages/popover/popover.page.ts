import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopinfoComponent} from '../../components/popinfo/popinfo.component';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  items = Array(40);
  constructor(private popover: PopoverController) { }

  ngOnInit() {
  }
  onClick(valor: number) {
    console.log('Item: ', valor);
    this.popover.dismiss({
      item: valor
    });
  }
}
