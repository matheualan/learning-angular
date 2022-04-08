import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: "Kayla", type: 'Cachorro', age: 4},
    {name: 'Maya', type: "Gato", age: 7},
    {name: "Nego", type: "Pássaro", age: 5},
    {name: "Sabia", type: "Pássaro", age: 8}
  ];

  animal: Animal = {name: 'Teste', type: 'Testando', age: 10};

  animalDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`
  }

}
