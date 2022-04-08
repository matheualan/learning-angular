import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = false; //usado com o *ngIf=canShow para liberar ou não algum conteúdo
  
  name: string = 'Matheu';

  constructor() { }

  ngOnInit(): void {
  }

}
