import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Avenger} from "../avenger";
import {Observable} from "rxjs/Observable";
import {Agent} from "../../agents/agent";
import {AgentsService} from "../../agents/agents.service";
import {AvengersService} from "../avengers.service";

@Component({
  selector: 'av-avenger-edit',
  templateUrl: './avenger-edit.component.html'
})
export class AvengerEditComponent implements OnInit, OnChanges {
  agents: Observable<Agent[]>;
  avengerModel: Avenger = new Avenger('','','','',0,'',null);

  @Input() avenger: Avenger;
  @Output() avengerUpdated = new EventEmitter();
  @Output() actionCanceled = new EventEmitter();

  constructor(private agentsService: AgentsService,
              private avengersService: AvengersService) { }

  ngOnInit() {
    this.agents = this.agentsService.getAgents();
  }

  ngOnChanges() {
    if (this.avenger) {
      this.avengerModel = new Avenger(this.avenger.id,
                                      this.avenger.firstName,
                                      this.avenger.lastName,
                                      this.avenger.alias,
                                      this.avenger.power,
                                      this.avenger.imageURL,
                                      this.avenger.agent);
    }
  }

  editAvenger() {
    this.avengersService.updateAvenger(this.avengerModel).subscribe(
      () => this.avengerUpdated.emit(null)
    );
  }

  onCancel() {
    this.actionCanceled.emit(null);
  }

}
