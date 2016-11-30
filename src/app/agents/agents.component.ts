import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Agent} from "./agent";
import {AgentsService} from "./agents.service";

@Component({
  selector: 'av-agents',
  templateUrl: './agents.component.html'
})
export class AgentsComponent implements OnInit {
  agents: Observable<Agent[]>;
  agOrderBy: string;

  constructor(private agentsService: AgentsService) { }

  ngOnInit() {
    this.agents = this.agentsService.getAgents();
  }

  removeAgent(id: string) {
    this.agentsService.deleteAgent(id).subscribe(
      () => this.agents = this.agentsService.getAgents()
    );
  }

}
