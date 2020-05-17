import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('ingredientForm') ingredientForm: NgForm;
  subscription : Subscription;
  editMode = false;
  editedIngredientIndex: number;
  editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (ingredientIndex: number) => {
        this.editedIngredientIndex = ingredientIndex;
        this.editMode = true;
        this.editedIngredient = this.shoppingListService.getIngredient(ingredientIndex);
        this.ingredientForm.setValue({
          ingredientName: this.editedIngredient.name,
          ingredientAmount: this.editedIngredient.amount
        });
    });
  }

  onSubmit(ingredientForm: NgForm) {
    const ingredientFormValue = ingredientForm.value;
    const newIngredient = new Ingredient(ingredientFormValue.ingredientName, ingredientFormValue.ingredientAmount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedIngredientIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    ingredientForm.reset();
  }

  onClear() {
    this.ingredientForm .reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedIngredientIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
