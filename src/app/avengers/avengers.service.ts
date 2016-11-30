import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

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

  deleteAvenger(id: string) : Observable<Response> {
    return this.http.delete(this.avengersUrl + id);
  }
}
