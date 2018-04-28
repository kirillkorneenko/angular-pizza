import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {RouterModule} from '@angular/router';
import { SaucesComponent } from './sauces/sauces.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'about-us', component: AboutUsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    SaucesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
