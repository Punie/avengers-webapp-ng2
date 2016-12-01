import {Component, OnInit, Input} from '@angular/core';
import {Avenger} from "../avenger";

@Component({
  selector: 'av-avenger-view',
  templateUrl: './avenger-view.component.html'
})
export class AvengerViewComponent implements OnInit {
  @Input() avenger: Avenger;

  constructor() { }

  ngOnInit() {
  }

}
