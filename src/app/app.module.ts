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

const routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'sauces', component: SaucesComponent},
  {path: 'drinks', component: DrinksComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: 'contacts', component: ContactsComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    SaucesComponent,
    DrinksComponent,
    PizzaComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
