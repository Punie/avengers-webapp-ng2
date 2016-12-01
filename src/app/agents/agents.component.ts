import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Agent} from "./agent";
import {AgentsService} from "./agents.service";

@Component({
  selector: 'av-agents',
  templateUrl: './agents.component.html',
  styles: [`
    .clickable {
      cursor: pointer;
    }
    .img-agent {
      max-width: 64px;
      height: 64px;
    }
    .table > tbody > tr > td {
      vertical-align: middle;
    }
    .img-cell {
      text-align: center;
    }
  `]
})
export class AgentsComponent implements OnInit {
  agents: Observable<Agent[]>;
  agentSelected: Agent;
  agentView = false;
  agentCreate = false;
  agentEdit = false;
  agOrderBy: string;

  constructor(private agentsService: AgentsService) { }

  ngOnInit() {
    this.agents = this.agentsService.getAgents();
  }

  viewAgent(agent: Agent) {
    this.agentCreate = false;
    this.agentEdit = false;
    this.agentView = true;
    this.agentSelected = agent;
  }

  createAgent() {
    this.agentView = false;
    this.agentEdit = false;
    this.agentCreate = true;
  }

  editAgent(agent: Agent) {
    this.agentView = false;
    this.agentCreate = false;
    this.agentEdit = true;
    this.agentSelected = agent;
  }

  removeAgent(id: string) {
    this.agentsService.deleteAgent(id).subscribe(
      () => this.agents = this.agentsService.getAgents()
    );
  }

  refreshView() {
    this.agentView = false;
    this.agentCreate = false;
    this.agentEdit = false;
    this.agents = this.agentsService.getAgents();
  }

  closePanel() {
    this.agentView = false;
    this.agentCreate = false;
    this.agentEdit = false;
  }

}
