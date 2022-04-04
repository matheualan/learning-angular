import { Component, Input, OnInit } from '@angular/core';

@Component({ //OUTROS COMPONENTS NÃO SERÃO AFETADOS PELAS REGRAS DE ESTILIZAÇÃO APLICADAS AQUI POIS ELE PEGA APENAS O CAMINHO DESTE COMPONENT 
  selector: 'app-first-component', //selector indica qual a tag html para representar o component (colocar a tag no body do app.component.html raiz)
  templateUrl: './first-component.component.html', //informa o caminho do arquivo html que contem o conteúdo visual do component
  styleUrls: ['./first-component.component.css'] //um array para informar os caminhos dos arquivos CSS
})
export class FirstComponentComponent implements OnInit {

  @Input() nameInput: string = 'ABC';

  name: string = 'Matheus';
  age: number = 30;
  job: string = 'Programador';
  hobbies = ['Jogar Online', 'Cultivar Plantas', 'Estudar Programação'];
  car = {
    name: 'Onix',
    motor: 1.0,
    year: 2015
  }

  constructor() { }

  ngOnInit(): void {
  }

}
