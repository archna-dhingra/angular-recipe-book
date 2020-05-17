import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public key!: string;
    public name: string;
    public description!: string;
    public directions!: string;
    public imageUrl!: string;
    public ingredients!: Ingredient[];

    constructor(name: string, desc: string, directions: string, imageUrl: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.directions = directions;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
    }
}