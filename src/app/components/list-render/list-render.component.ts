import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: "Kayla", type: 'Cachorro'},
    {name: 'Maya', type: "Gato"},
    {name: "Nego", type: "Pássaro"},
    {name: "Sabia", type: "Pássaro"}
  ];

  animal = {name: 'Teste', type: 'Testando'}

  constructor() { }

  ngOnInit(): void {
  }

}
