import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: string;
  
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.recipeService.setRecipeDetailsFlag(true);
    console.log('on init details');
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = params['id'];
        this.recipeService.fetchRecipe(this.recipeId).subscribe((recipe: Recipe) => {
          console.log('recipe', recipe);
          this.recipe = recipe;
        });
    });
  }

  // onAddToShoppingList() {
  //   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }

  // onEditRecipe() {
  //   this.router.navigate(['edit'], {relativeTo: this.route});
  // }

  // onDeleteRecipe() {
  //   this.recipeService.deleteRecipe(this.recipeId);
  //   this.router.navigate(['/recipes']);
  // }
}
