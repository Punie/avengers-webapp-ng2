import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Avenger} from "../avenger";
import {Observable} from "rxjs/Observable";
import {Agent} from "../../agents/agent";
import {AgentsService} from "../../agents/agents.service";
import {AvengersService} from "../avengers.service";

@Component({
  selector: 'av-avenger-edit',
  templateUrl: './avenger-edit.component.html',
  styles: [`
    .img-form {
      max-height: 256px;
      max-width: 256px;
    }
  `]
})
export class AvengerEditComponent implements OnInit, OnChanges {
  agents: Observable<Agent[]>;
  avengerModel: Avenger = new Avenger(null,null,null,null,null,null,null,null);

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
                                      this.avenger.description,
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
