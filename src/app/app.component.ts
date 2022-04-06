import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Curso Angular 13';
  userName: string = 'Tilton Nascimento';
  password: string = '*******';
  userData = {
    email: 'tilton@hotmail.com',
    role: 'Admin'
  };

}
