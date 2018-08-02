import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllcountriesComponent } from './allcountries/allcountries.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { RestcountriesHttpService } from './restcountries-http.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllcountriesComponent,
    CountryViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '',redirectTo: 'home', pathMatch: 'full' },
      { path: 'allcountries/:regionName', component: AllcountriesComponent },
      { path: 'allcountries/language/:languageCode', pathMatch: 'full' ,component: AllcountriesComponent },
      { path: 'allcountries/currency/:currencyCode', pathMatch: 'full' ,component: AllcountriesComponent },
      { path: 'country-view/:country.name', component: CountryViewComponent }
    ], {useHash: true})
  ],  
  providers: [RestcountriesHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
