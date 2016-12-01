import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Agent} from "../agent";
import {AgentsService} from "../agents.service";

@Component({
  selector: 'av-agent-edit',
  templateUrl: './agent-edit.component.html'
})
export class AgentEditComponent implements OnInit {
  agentModel: Agent = new Agent('','','');

  @Input() agent: Agent;
  @Output() agentUpdated = new EventEmitter();
  @Output() actionCanceled = new EventEmitter();

  constructor(private agentsService: AgentsService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.agent) {
      this.agentModel = new Agent(this.agent.id,
        this.agent.firstName,
        this.agent.lastName);
    }
  }

  editAgent() {
    this.agentsService.updateAgent(this.agentModel).subscribe(
      () => this.agentUpdated.emit(null)
    );
  }

  onCancel() {
    this.actionCanceled.emit(null);
  }

}
