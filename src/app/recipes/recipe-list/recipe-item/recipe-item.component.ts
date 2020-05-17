import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() fromPage: string;
  @Input() recipeIndex: number;
  @Output() recipeDetails = new EventEmitter<Recipe>();

  showRecipeDetails() {
    this.recipeDetails.emit(this.recipe);
  }
}
