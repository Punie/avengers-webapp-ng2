import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Avenger} from "../avenger";
import {Observable} from "rxjs/Observable";
import {Agent} from "../../agents/agent";
import {AgentsService} from "../../agents/agents.service";
import {AvengersService} from "../avengers.service";

@Component({
  selector: 'av-avenger-create',
  templateUrl: './avenger-create.component.html',
  styles: [`
    .img-form {
      max-height: 256px;
      max-width: 256px;
    }
  `]
})
export class AvengerCreateComponent implements OnInit {
  agents: Observable<Agent[]>;
  avengerModel: Avenger = new Avenger(null,null,null,null,null,null,null,new Agent(null,null,null,null,null,null));

  @Output() avengerCreated = new EventEmitter();
  @Output() actionCanceled = new EventEmitter();

  constructor(private agentsService: AgentsService,
              private avengersService: AvengersService) { }

  ngOnInit() {
    this.agents = this.agentsService.getAgents();
  }

  createAvenger() {
    this.avengersService.createAvenger(this.avengerModel).subscribe(
      () => this.avengerCreated.emit(null)
    );
  }

  onCancel() {
    this.actionCanceled.emit(null);
  }

}
