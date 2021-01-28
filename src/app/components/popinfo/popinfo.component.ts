import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  constructor(private popover: PopoverController) { }

  ngOnInit() {}
  async mostrarPop(event) {
    const popover = await this.popover.create({
      component: PopinfoComponent,
      event,
      mode: 'ios',
      backdropDismiss: false
    });
    await popover.present();
    const {data} = await popover.onWillDismiss();
    // cont {data} = await popoverDidDismiss
    console.log('Info: ', data);
  }
}
