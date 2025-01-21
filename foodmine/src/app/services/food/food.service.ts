import { Injectable } from '@angular/core';
import { Food} from '../../shared/models/food'
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return[
      {
        id:1,
        name: 'carbonara',
        price: 13,
        cookTime: '10-15',
        favorite: false,
        origins:['italy'],
        stars: 3.7,
        imageUrl: '/foods/image-1.jpg',
        tags: ['Pasta', 'Cuisine']
      },
      {
        id:2,
        name: 'fried crab balls',
        price: 8,
        cookTime: '5-10',
        favorite: false,
        origins:['America'],
        stars: 3.6,
        imageUrl: '/foods/image-2.jpg',
        tags: ['Fried', 'Snack', 'Cuisine']
      },
      {
        id:3,
        name: 'burger',
        price: 11,
        cookTime: '10-15',
        favorite: false,
        origins:['America'],
        stars: 3.9,
        imageUrl: '/foods/image-3.jpg',
        tags: ['Sandwich', 'Lunch', 'Meal', 'Cuisine']
      },
      {
        id:4,
        name: 'pizza',
        price: 20,
        cookTime: '30-40',
        favorite: true,
        origins:['italy'],
        stars: 4,
        imageUrl: '/foods/image-4.jpg',
        tags: ['Pizza', 'Convenient', 'Amazing', 'Cuisine']
      },
      {
        id:5,
        name: 'pancakes',
        price: 6,
        cookTime: '10-15',
        favorite: false,
        origins:['italy'],
        stars: 3.8,
        imageUrl: '/foods/image-5.jpg',
        tags: ['Breakfast', 'Sweet', 'Tasty', 'Easy-To-Make']
      }
    ]
  }
}
