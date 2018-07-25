import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
recipesChanged = new Subject<Recipe[]>();

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
addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
}
updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
}
deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
}
}