import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('cargando siguientes...');
    setTimeout(() => {
      if (this.data.length > 50){
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const nuevoArray = Array(5);
      this.data.push(...nuevoArray);
      event.target.complete();
    }, 500);
  }
}
