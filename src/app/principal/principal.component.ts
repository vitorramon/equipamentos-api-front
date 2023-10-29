import { Component } from '@angular/core';
import { Equipamento } from '../modelo/Equipamento';
import { EquipamentoService } from '../servico/equipamento.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

    //Objeto do tipo cliente
    equipamento = new Equipamento();

    //Variável para visibilidade dos botões

    btnCadastro:boolean = true;

    //Variável para visibilidade da tabela
    tabela:boolean = true;

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

    // Método de cadastro
    cadastrar():void{
      this.servico.cadastrar(this.equipamento)
        .subscribe(retorno => { 
          //Cadastrar cliente no vetor
          this.equipamentos.push(retorno); 

          // Limpar formulário

          this.equipamento = new Equipamento();
          //Mensagem
          alert('Equipamento Cadastrado com Sucesso');

        });
    }

    // Método de Inicialização
    ngOnInit(){
      this.selecionar();
    }

    // Método para selecionar um equipamento específico
    selecionarEquipamento(posicao:number):void{
      
      //Selecionar cliente no vetor
      this.equipamento = this.equipamentos[posicao];

      //Visibilidade dos botões
      this.btnCadastro = false;

      //Visibilidade da tabela
      this.tabela = false;

    }

    // Método para editar clientes

    alterar():void{
      this.servico.alterar(this.equipamento)
        .subscribe(retorno => {
          //Obter posição do equipamento no vetor
          let posicao = this.equipamentos.findIndex(obj =>{
            return obj.codigo == retorno.codigo;
          });

          //Alterar dados do equipamento no vetor

          this.equipamentos[posicao] = retorno;

          //Limpar

          this.equipamento = new Equipamento();

          //Visibilidade dos botões

          this.btnCadastro = true;

          // Visibilidade da tabela

          this.tabela = true;

          // Mensagem
          alert('Equipamento alterado com sucesso!')

        })
    }

    //Método para remover equipamentos

    remover():void{
      this.servico.remover(this.equipamento.codigo)
        .subscribe(retorno => {
          //Obter posição do equipamento no vetor
          let posicao = this.equipamentos.findIndex(obj =>{
            return obj.codigo == this.equipamento.codigo;
          });

          //Remover equipamento no vetor

          this.equipamentos.splice(posicao, 1);
          
          //Limpar

          this.equipamento = new Equipamento();

          //Visibilidade dos botões

          this.btnCadastro = true;

          // Visibilidade da tabela

          this.tabela = true;

          // Mensagem
          alert('Equipamento removido com sucesso!')

        })
    }

    cancelar():void{

      //Limpar

      this.equipamento = new Equipamento();

      //Visibilidade dos botões

      this.btnCadastro = true;

      // Visibilidade da tabela

      this.tabela = true;

    }
}
