import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Agent} from "../agent";
import {AgentsService} from "../agents.service";

@Component({
  selector: 'av-agent-create',
  templateUrl: './agent-create.component.html'
})
export class AgentCreateComponent implements OnInit {
  agentModel: Agent = new Agent(null,null,null,null,null,null);

  @Output() agentCreated = new EventEmitter();
  @Output() actionCanceled = new EventEmitter();

  constructor(private agentsService: AgentsService) { }

  ngOnInit() {
  }

  createAgent() {
    this.agentsService.createAgent(this.agentModel).subscribe(
      () => this.agentCreated.emit(null)
    );
  }

  onCancel() {
    this.actionCanceled.emit(null);
  }

}
