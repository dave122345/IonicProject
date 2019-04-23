import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
  Generated class for the MarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MarsProvider Provider');
  }
  //Calling for data from the API
  getMars(): Observable<any> {
    return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2019-4-9&api_key=tHunhfPTmpv9cOYWLUcM9bISElCSHRq9OPNdweOi");
  }
}
