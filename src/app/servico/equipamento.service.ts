import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Equipamento } from '../modelo/Equipamento';

@Injectable({
  providedIn: 'root'
})

export class EquipamentoService {

  private url:string = 'http://localhost:8080';

  //Responsável por realizar requisições à API
  constructor(private http:HttpClient) { }

  //Método para selecionar todos os equipamento

  listar():Observable<Equipamento[]>{
    return this.http.get<Equipamento[]>(`${this.url}/listar`);
  }
}
