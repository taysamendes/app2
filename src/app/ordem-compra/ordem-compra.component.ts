import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {


  public endereco: string = 'Rua dos bobos'
  public numero: string = '176'
  public complemento: string = 'Proximo a rua da saída'
  public formaPagamento: string = 'Débito'


  constructor() { }

  ngOnInit(): void {
  }

  public atualizarEndereco(endereco: string):void {
    this.endereco = endereco
  }

  public atualizaNumero(numero: string): void{
    this.numero = numero

  }

  public atualizaComplemento(complemento: string): void{
    this.complemento = complemento
  }

  public atualizaFormaPagamento(formaPgamento: string){
    this.formaPagamento = formaPgamento

  }

}
