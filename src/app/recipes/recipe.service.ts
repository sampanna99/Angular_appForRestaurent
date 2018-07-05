import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply the test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1024/landscape-1503418862-chicken-thighs-delish.jpg?resize=768:*', 
  [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
  ]),
  new Recipe('Another Test Recipe', 'This is simply the test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1024/landscape-1503418862-chicken-thighs-delish.jpg?resize=768:*',
  [
       new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
  ])
];
getRecipes(){
    return this.recipes.slice();
}
getRecipe(index: number) {
    return this.recipes[index];
}
}