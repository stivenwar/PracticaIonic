import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {IonList, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static: false}) lista: IonList;
  usuarios: Observable<any>;
  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  /**
   * mensaje tipo Toast
   */
  async presentarToast(message: string){
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      header: 'Cabecera del Toast',
      color: 'secondary',
      animated: true,
      position: 'middle'
    });
    await toast.present();
  }
  favorito(usuario: any) {
    this.presentarToast('Favorito');
    console.log('favorito->', usuario);
    this.lista.closeSlidingItems();
  }

  compartir(usuario: any) {
    this.presentarToast('Compartido');
    console.log('compartir->', usuario);
    this.lista.closeSlidingItems();
  }

  borrar(usuario: any) {
    this.presentarToast('Usuario');
    console.log('borrar->', usuario);
    this.lista.closeSlidingItems();
  }
}
