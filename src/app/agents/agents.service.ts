import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Agent} from "./agent";

@Injectable()
export class AgentsService {
  private agentsUrl = 'http://localhost:8080/api/agents/';

  constructor(private http: Http) { }

  getAgents() : Observable<Agent[]> {
    return this.http.get(this.agentsUrl)
                    .map((response: Response) => response.json());
  }

  deleteAgent(id: string) : Observable<Response> {
    return this.http.delete(this.agentsUrl + id);
  }
}
