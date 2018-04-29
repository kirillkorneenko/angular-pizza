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

const routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'sauces', component: SaucesComponent},
  {path: 'drinks', component: DrinksComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'enter', component: EnterComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'order', component: OrderComponent}
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
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    SaucesService,
    DrinksService,
    PizzaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
