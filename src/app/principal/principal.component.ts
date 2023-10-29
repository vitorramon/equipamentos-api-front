import { Component } from '@angular/core';
import { Equipamento } from '../modelo/Equipamento';
import { EquipamentoService } from '../servico/equipamento.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
    //Variável para visibilidade dos botões

    btnCadastro:boolean = true;

    // Json de equipamentos

    equipamentos:Equipamento[] = [];

    // Construtor

    constructor(private servico:EquipamentoService){

    }

    // Método para selecionar os clientes
    selecionar():void{
      this.servico.listar()
        .subscribe(retorno => this.equipamentos = retorno);
    }

    // Método de Inicialização
    ngOnInit(){
      this.selecionar();
    }
}
