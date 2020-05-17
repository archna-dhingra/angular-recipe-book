import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'recipe-preview',
  templateUrl: './recipe-preview-dialog.component.html',
  styleUrls: ['./recipe-preview-dialog.component.css']
})
export class RecipePreviewDialogComponent implements OnInit {
  recipe: Recipe;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: Recipe,
    private readonly recipeService: RecipeService,
    private readonly router: Router) {}

    ngOnInit() {
      this.recipe = this.dialogData;
    }

    openRecipeDetailsPage() {
      this.recipeService.setRecipeDetailsFlag(true);
      this.router.navigate(['recipes', this.recipe.key]);
    }
}