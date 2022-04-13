import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(Animals: Animal[], animal: Animal) {
    return Animals.filter((a) => animal.name !== a.name)
  }

}
