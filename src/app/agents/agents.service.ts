import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Agent} from "./agent";

@Injectable()
export class AgentsService {
  private agentsUrl = 'https://avengers-webapp.herokuapp.com/api/agents/';

  constructor(private http: Http) { }

  getAgents() : Observable<Agent[]> {
    return this.http.get(this.agentsUrl)
                    .map((response: Response) => response.json());
  }

  createAgent(agent: Agent) : Observable<Agent> {
    let body = JSON.stringify(agent);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.agentsUrl, body, options)
                    .map(agent => agent.json());
  }

  updateAgent(agent: Agent) : Observable<Response> {
    let body = JSON.stringify(agent);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.agentsUrl + agent.id, body, options);
  }

  deleteAgent(id: string) : Observable<Response> {
    return this.http.delete(this.agentsUrl + id);
  }
}
