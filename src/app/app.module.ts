import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {RouterModule} from '@angular/router';
import { SaucesComponent } from './sauces/sauces.component';
import { DrinksComponent } from './drinks/drinks.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EnterComponent } from './enter/enter.component';
import {HttpClientModule} from '@angular/common/http';
import {SaucesService} from '../services/sauce/sauces.service';
import {DrinksService} from '../services/drinks/drinks.service';
import {PizzaService} from '../services/pizza/pizza.service';
import { OrderComponent } from './order/order.component';
import {SizepizzaService} from '../services/sizepizza/sizepizza.service';
import {FormsModule} from '@angular/forms';
import {OrderService} from '../services/order/order.service';
import {ContactsService} from '../services/contacts/contacts.service';
import {PastryService} from '../services/pastry/pastry.service';
import { AdminComponent } from './admin/admin.component';
import { HasRoleDirective } from '../directive/has-role.directive';
import {UserService} from '../services/user/user.service';
import { AddFoodComponent } from './add-food/add-food.component';

const routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'sauces', component: SaucesComponent},
  {path: 'drinks', component: DrinksComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'enter', component: EnterComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'order', component: OrderComponent},
  {path: 'admin', component: AdminComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    SaucesComponent,
    DrinksComponent,
    PizzaComponent,
    ContactsComponent,
    EnterComponent,
    OrderComponent,
    AdminComponent,
    HasRoleDirective,
    AdminComponent,
    AddFoodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SaucesService,
    DrinksService,
    PizzaService,
    SizepizzaService,
    OrderService,
    ContactsService,
    PastryService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
