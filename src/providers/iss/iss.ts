import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the IssProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IssProvider {


  constructor(public http: HttpClient) {
    console.log('Hello IssProvider Provider');
  }
  //Calling for data from the API
  getIss(): Observable<any> {
    return this.http.get("http://api.open-notify.org/astros.json");
  }

}
