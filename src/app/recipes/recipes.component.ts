import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from './recipe.model';
import { MatDialog } from '@angular/material/dialog';
import { AddRecipeDialogComponent } from './add-recipe-dialog/add-recipe-dialog.component';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDetailsFlag: boolean;
  recipes: Recipe[] = [];
  fromPage: string = "recipes";

  constructor(private readonly recipeService: RecipeService,
    private route: ActivatedRoute,
    private readonly router: Router,
    private readonly dialog: MatDialog) { }

  ngOnInit() {
    this.route.firstChild.params.subscribe(params => {
      if(params['id']) {
        console.log('if params id');
        this.recipeService.setRecipeDetailsFlag(true);
      }
      else {
        console.log('else load recipes');
        this.loadRecipes();
        this.recipeService.setRecipeDetailsFlag(false);
      }
    });
    this.recipeDetailsFlag = this.recipeService.getRecipeDetailsFlag();
    console.log('this.recipeDetailsFlag', this.recipeDetailsFlag);
  }

  loadRecipes() {
    this.recipeService.fetchRecipes().subscribe(recipes => {
      this.recipes = recipes;
      console.log('recipes in recipes component');
      console.log(this.recipes);
    });
  }

  showRecipeDetails(recipeId: string) {
    console.log('show recipe details');
    console.log('recipeId', recipeId);
    this.recipeService.setRecipeDetailsFlag(true);
    this.recipeDetailsFlag = this.recipeService.getRecipeDetailsFlag();
    console.log('this.recipeDetailsFlag', this.recipeDetailsFlag);
    this.router.navigate(['recipes', recipeId]);
  }

  openAddNewRecipeDialog() {
    this.dialog.open(AddRecipeDialogComponent, {
      disableClose: true,
      panelClass: 'add-recipe-dialog-container'
    });
  }
}