import { Component, OnInit } from '@angular/core';
import {DrinksService} from '../../services/drinks/drinks.service';
import {SaucesService} from '../../services/sauce/sauces.service';
import {PizzaService} from '../../services/pizza/pizza.service';
import {IngredientService} from '../../services/ingredient/ingredient.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {

  data: Array<any>;
  private ingredients= new Array<any> ();
  select: Object;

    sauceAdd={
      name:'',
      price:'',
      urlImg:'',
      description:''
    };

  drinkAdd={
    name:'',
    price:'',
    urlImg:'',
    description:''
  };

  pizzaAdd={
    name:'',
    price:'',
    urlImg:'',
    caloricity: null,
    description:'',
    ingredients:[]
  };

  ingredientAdd={
    name:'',
    price:'',
    caloricity:'',
    weight:''
  };

  constructor(private drinksService:DrinksService, private saucesService:SaucesService, private pizzaService: PizzaService,  private ingredientService:IngredientService) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.ingredientService.getAllIngredient().subscribe(
      (res: any) => {
        this.data = res;
      }
    );
  }
  public addSauce(){
    this.saucesService.addSauce(this.sauceAdd).subscribe();
    this.sauceAdd.name='';
    this.sauceAdd.price='';
    this.sauceAdd.urlImg='';
    this.sauceAdd.description='';
  }
  public addDrink(){
    this.drinksService.addDrink(this.drinkAdd).subscribe();
    this.drinkAdd.name='';
    this.drinkAdd.price='';
    this.drinkAdd.urlImg='';
    this.drinkAdd.description='';
  }

  public addPizza(){
    var totalCaloricity = 0;

    this.ingredients.forEach(function(item) {
      totalCaloricity += item.caloricity;
    });
    this.pizzaAdd.caloricity= totalCaloricity;
    this.pizzaAdd.ingredients= this.ingredients;
    this.pizzaService.addPizza(this.pizzaAdd).subscribe();
    this.pizzaAdd.name='';
    this.pizzaAdd.price='';
    this.pizzaAdd.ingredients= new Array<any> ();
    this.ingredients= new Array<any> ();
    this.pizzaAdd.caloricity='';
    this.pizzaAdd.description='';
    this.pizzaAdd.urlImg='';
  }
  public addIngredient(){
    this.ingredientService.addIngredient(this.ingredientAdd).subscribe();
    this.ingredientAdd.name='';
    this.ingredientAdd.price='';
    this.ingredientAdd.caloricity='';
    this.ingredientAdd.weight='';
  }

  public addIngredientForPizza(){
    this.ingredients.push(this.select)
  }

  public deleteIngredientForPizza(item){
    this.ingredients = this.ingredients.filter(obj => obj !== item);
  }
}
