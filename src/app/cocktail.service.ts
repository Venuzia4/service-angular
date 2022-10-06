import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktails: Cocktail[]=[
    {
      name: 'Mojito',
      price: 8,
      picture: 'https://assets.afcdn.com/recipe/20180705/80255_w350h250c1cx2774cy1849.jpg'
    },
    {
      name: 'Punch exotique',
      price: 5,
      picture: 'https://assets.afcdn.com/recipe/20180705/80348_w350h250c1cx1491cy2383.jpg'
    },
    {
      name: 'Piña Colada',
      price: 7,
      picture: 'https://assets.afcdn.com/recipe/20180705/80258_w350h250c1cx974cy1535.jpg'
    }

  ];
  



  getCocktails():Cocktail[]{
    return this.cocktails;

   }
}
