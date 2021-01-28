import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Componente} from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
