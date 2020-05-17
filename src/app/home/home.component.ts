import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { HOME_PAGE_TAGLINE, HOME_PAGE_BACKGROUND } from '../app.constants';
import { Recipe } from '../recipes/recipe.model';
import { RecipePreviewDialogComponent } from './recipe-preview-dialog/recipe-preview-dialog.component';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  HOME_PAGE_TAGLINE = HOME_PAGE_TAGLINE;
  HOME_PAGE_BACKGROUND = HOME_PAGE_BACKGROUND;
  recipes: Recipe[] = [];
  dialogSubscription: Subscription;
  fromPage: string = "home";

  constructor(private recipeService: RecipeService,
    private readonly dialog: MatDialog) {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.fetchRecipes().subscribe(recipes => {
      this.recipes = recipes;
      this.recipes.unshift(new Recipe('Top recipes that everyone craves for...','', '', '', []));
    });
  }

  openRecipePreview(recipe: Recipe) {
    this.dialog.open(RecipePreviewDialogComponent, {
      disableClose: true,
      data: recipe
    });
  }

  ngOnDestroy() {
    this.dialogSubscription.unsubscribe();
  }
}