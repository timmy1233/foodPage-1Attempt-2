import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return[
      '/foods/image-1.jpg',
      '/foods/image-2.jpg',
      '/foods/image-3.jpg',
      '/foods/image-4.jpg',
      '/foods/image-5.jpg',
    ]
  }
}
