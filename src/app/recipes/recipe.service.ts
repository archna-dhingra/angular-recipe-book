import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesRef: AngularFireList<Recipe>;
    private recipeDetailsFlag: boolean = false;

    constructor(private readonly angularFireDatabase: AngularFireDatabase) {
        this.recipesRef = angularFireDatabase.list('recipes');
    }

    fetchRecipes() {
        return this.recipesRef.snapshotChanges().pipe(map(recipes => {
            return recipes.map(recipe => ({ key: recipe.payload.key, ...recipe.payload.val() }))
        }));
    }

    fetchRecipe(recipeId: string) {
        console.log('recipe Id', recipeId);
        return this.angularFireDatabase.object('/recipes/'+recipeId).valueChanges().pipe();
    }

    setRecipeDetailsFlag(recipeDetailsFlag: boolean) {
        this.recipeDetailsFlag = recipeDetailsFlag;
    }

    getRecipeDetailsFlag() {
        return this.recipeDetailsFlag;
    }






    // recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [];

    // constructor(private shoppingListService: ShoppingListService) { }

    // setRecipes(recipes: Recipe[]) {
    //     this.recipes = recipes;
    //     this.recipesChanged.next(this.recipes.slice());
    // }

    // getRecipes() {
    //     return this.recipes.slice();
    // }

    // getRecipe(recipeIndex: number){
    //     return this.recipes[recipeIndex];
    // }

    // addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //     this.shoppingListService.addIngredients(ingredients);
    // }

    // addRecipe(recipe: Recipe) {
    //     this.recipes.push(recipe);
    //     this.recipesChanged.next(this.recipes.slice());
    // }

    // updateRecipe(index: number, newRecipe: Recipe) {
    //     this.recipes[index] = newRecipe;
    //     this.recipesChanged.next(this.recipes.slice());
    //  }

    //  deleteRecipe(index: number) {
    //      this.recipes.splice(index, 1);
    //      this.recipesChanged.next(this.recipes.slice());
    //  }
}