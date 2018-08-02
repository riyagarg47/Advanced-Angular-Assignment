import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from "rxjs/Observable";
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class RestcountriesHttpService {

  //public allCountries;
 // public currentCountry;
  public baseUrl = 'https://restcountries.eu/rest/v2';

  constructor(public _http: HttpClient) { 
    console.log("service constructor is called.")
  }

  // method to get all countries
  public getAllCountries(regionName): any{
    let myResponse = this._http.get(this.baseUrl + '/region' +'/' + regionName)
    return myResponse;
   
  }

  //method to get single country details
  public getSingleCountryDetails(countryName): any{
    let myResponse = this._http.get(this.baseUrl + '/name' +'/' + countryName + '?fullText=true')
    return myResponse;
  }

  // method to get all countries with common currency
  public getAllCountriesByCurrency(currencyCode): any{
    let myResponse = this._http.get(this.baseUrl + '/currency' +'/' + currencyCode)
    return myResponse;
   
  }

  // method to get all countries with common language
  public getAllCountriesByLanguage(languageCode): any{
    let myResponse = this._http.get(this.baseUrl + '/lang' +'/' + languageCode)
    return myResponse;
   
  }

}
