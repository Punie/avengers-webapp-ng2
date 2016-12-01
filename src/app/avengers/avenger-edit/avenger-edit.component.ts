import {Component, OnInit, Input} from '@angular/core';
import {Avenger} from "../avenger";
import {Observable} from "rxjs/Observable";
import {Agent} from "../../agents/agent";
import {AgentsService} from "../../agents/agents.service";
import {AvengersService} from "../avengers.service";

@Component({
  selector: 'av-avenger-edit',
  templateUrl: './avenger-edit.component.html'
})
export class AvengerEditComponent implements OnInit {
  agents: Observable<Agent[]>;
  @Input() avenger: Avenger;

  constructor(private agentsService: AgentsService,
              private avengersService: AvengersService) { }

  ngOnInit() {
    this.agents = this.agentsService.getAgents();
  }

  editAvenger() {
    this.avengersService.updateAvenger(this.avenger).subscribe();
  }

}
