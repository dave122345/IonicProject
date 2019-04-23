import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the NasaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NasaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NasaProvider Provider');
  }
  //Calling for data from the API
  getNasa(): Observable<any> {
    return this.http.get("https://api.nasa.gov/planetary/apod?api_key=tHunhfPTmpv9cOYWLUcM9bISElCSHRq9OPNdweOi");
  }
}