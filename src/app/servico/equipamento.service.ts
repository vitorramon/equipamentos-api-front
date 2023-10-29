import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class EquipamentoService {

  private url:string = "http://localhost:8080";

  //Responsável por realizar requisições à API
  constructor(private http:HttpClient) { }
}
