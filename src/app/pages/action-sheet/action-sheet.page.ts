import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

   async mostrarActionSheet() {
      const actionSheet = await this.actionSheetCtrl.create({
        /*header es el titulo*/
        header: 'albums',
        /*salir solo pulsando un boton backdropDismiss si no saldras pulsando fuera*/
        backdropDismiss: false,
        // array de bortones que vamos a mostrar
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'rojo',
          handler: () => {
            console.log('Click en Delete');
          }
        },
          {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Click en Share');
          }
        },
          {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Click en Cancelar');
          }
        }]
      });
      await actionSheet.present();
  }
}
