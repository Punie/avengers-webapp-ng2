import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Agent} from "../agent";

@Component({
  selector: 'av-agent-view',
  templateUrl: './agent-view.component.html',
  styles: [`
    img {
      max-width: 128px;
      max-height: 128px;
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
