import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

    async presentarAlert() {
        const alert = await this.alertCtrl.create({
          header: 'Alert',
          subHeader: 'Subtitulo',
          message: 'Este es un mensaje de alerta',
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (datos) => {
              console.log('Boton OK');
            }
          },
            {
            text: 'OK',
              handler: (datos) => {
              console.log('Boton OK', datos);
              }
          }]
        });
        await alert.present();
    }

  async mostrarInput() {
    const alert = await this.alertCtrl.create({
      header: 'TITULO',
      subHeader: 'Escribe un titulo',
      inputs: [{
        name: 'name',
        type: 'text',
        placeholder: 'Escriba el titulo aqui...'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (datos) => {
          console.log('Boton OK');
        }
      },
        {
          text: 'OK',
          handler: (datos) => {
            console.log('Boton OK', datos);
            this.titulo = datos.name;
          }
        }]
    });
    await alert.present();
  }
}
