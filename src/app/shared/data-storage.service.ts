// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { map } from 'rxjs/operators';

// import { RecipeService } from '../recipes/recipe.service';
// import { Observable } from 'rxjs';
// import { Recipe } from '../recipes/recipe.model';
// import { Ingredient } from './ingredient.model';

// @Injectable()
// export class DataStorageService {
//     recipes: any;
//     recipesRef: AngularFireList<Recipe>;

//     constructor(private readonly angularFireDatabase: AngularFireDatabase) {
//         this.recipesRef = angularFireDatabase.list('recipes');
//         // const ingredients = [new Ingredient('Pizza base',2), new Ingredient('Olives',4)];
//         // let recipe = new Recipe('Pizza', 'Pizza is the best!', 'follow instructions below', 'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800', ingredients);
//         // this.recipesRef.push(recipe);
//     }

    // fetchRecipes() {
    //     return this.recipesRef.snapshotChanges().pipe(map(recipes => {
    //         return recipes.map(recipe => ({ key: recipe.payload.key, ...recipe.payload.val() }))
    //     }));
    // }

        // map(recipes => {
        //           return recipes.map(recipe => {
        //               return recipe;
        //             //   return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        //           });
        //       }));

        // .pipe(
        //     map(actions => actions.map(a => {
        //       const data = a.payload.doc.data() as Shirt;
        //       const id = a.payload.doc.id;
        //       return { id, ...data };


        // .subscribe(data => {
        //     console.log('data', data);
        //     this.recipes = data;
        // });

    // constructor(private http: HttpClient,
    //     private recipeService: RecipeService,
    //     private db: AngularFireDatabase) {
    //     }

    // storeRecipes() {
    //     const recipes = this.recipeService.getRecipes();
    //     this.http
    //       .put('https://recipe-book-3f984.firebaseio.com/recipes.json', recipes)
    //       .subscribe(response => {
    //           console.log(response);
    //       })
    // }

    // fetchRecipes() {
    //     return this.http.get<Recipe[]>('https://recipe-book-3f984.firebaseio.com/recipes.json')
    //       .pipe(map(recipes => {
    //           return recipes.map(recipe => {
    //               return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
    //           });
    //       }),
    //       tap(recipes => {
    //           this.recipeService.setRecipes(recipes);
    //       })
    //     );
    // }

    // try() {
    // this.db.object('recipes').set(new Recipe('Top recipes that everyone craves for...','', '', '', []));

    // this.db.object('recipes').snapshotChanges().subscribe((response) => {
    //     console.log(response.type);
    //     console.log(response.key);
    //     console.log(response.payload.val());
    // });

    // fetchRecipes() {
    //     return this.http.get<Recipe[]>('https://recipe-book-3f984.firebaseio.com/recipes.json')
    //       .pipe(map(recipes => {
    //           return recipes.map(recipe => {
    //               return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
    //           });
    //       }));
    // }
// }