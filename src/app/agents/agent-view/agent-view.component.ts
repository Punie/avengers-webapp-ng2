import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Agent} from "../agent";

@Component({
  selector: 'av-agent-view',
  templateUrl: './agent-view.component.html',
  styles: [`
    img {
      max-width: 256px;
      max-height: 256px;
    }
`]
})
export class AgentViewComponent implements OnInit {
  @Input() agent: Agent;
  @Output() actionCanceled = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    this.actionCanceled.emit(null);
  }

}
