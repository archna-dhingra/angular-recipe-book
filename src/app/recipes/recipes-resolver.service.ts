// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// import { Recipe } from './recipe.model';
// import { RecipeService } from './recipe.service';
// import { retry } from 'rxjs/operators';

// @Injectable()
// export class RecipesResolverService implements Resolve<Recipe[]> {

//     constructor(private recipeService: RecipeService) {}

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const recipes = this.recipeService.getRecipes();
//         if(recipes.length === 0) {
//             return this.recipeService.fetchRecipes();
//         } else {
//             return recipes;
//         }
//     }
// }