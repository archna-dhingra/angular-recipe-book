import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path : '', redirectTo: '/home', pathMatch: 'full'},
    { path : 'home', component: HomeComponent },
    { path : 'recipes', component: RecipesComponent,
        children: [
            { path: '', component: RecipesComponent },
            { path: ':id', component: RecipeDetailComponent},
            // { path: 'new', component: RecipeEditComponent },
            // { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
            // { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
        ]
    },
    // { path : 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {                                     

}