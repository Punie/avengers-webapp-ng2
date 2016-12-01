import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Avenger} from "../avenger";

@Component({
  selector: 'av-avenger-view',
  templateUrl: './avenger-view.component.html',
  styles: [`
    img {
      max-width: 128px;
      max-height: 128px;
    }
`]
})
export class AvengerViewComponent implements OnInit {
  @Input() avenger: Avenger;
  @Output() actionCanceled = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    this.actionCanceled.emit(null);
  }

}
