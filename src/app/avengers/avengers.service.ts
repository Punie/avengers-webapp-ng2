import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import {Observable} from "rxjs/Rx";

import {Avenger} from "./avenger";

@Injectable()
export class AvengersService {
  private avengersUrl = 'http://localhost:8080/api/avengers/';

  constructor(private http: Http) { }

  getAvengers() : Observable<Avenger[]> {
    return this.http.get(this.avengersUrl)
                    .map((response: Response) => response.json());
  }

  createAvenger(avenger: Avenger) : Observable<Avenger> {
    let body = JSON.stringify(avenger);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.avengersUrl, body, options)
                    .map(avenger => avenger.json());
  }

  updateAvenger(avenger: Avenger) : Observable<Response> {
    let body = JSON.stringify(avenger);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.avengersUrl + avenger.id, body, options);
  }

  deleteAvenger(id: string) : Observable<Response> {
    return this.http.delete(this.avengersUrl + id);
  }
}
