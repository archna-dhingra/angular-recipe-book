import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.css']
})
export class AddRecipeDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addRecipe() {
    console.log('add recipe');
  }
}