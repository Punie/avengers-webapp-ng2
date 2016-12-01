import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs/Observable";

import { Avenger } from "./avenger";
import { AvengersService } from "./avengers.service";

@Component({
  selector: 'av-avengers',
  templateUrl: './avengers.component.html'
})
export class AvengersComponent implements OnInit {
  avengers: Observable<Avenger[]>;
  avengerView = false;
  avengerViewSelected: Avenger;
  avengerEdit = false;
  avengerEditSelected: Avenger;
  avOrderBy: string;


  constructor(private avengersService: AvengersService) { }

  ngOnInit() {
    this.avengers = this.avengersService.getAvengers();
  }

  viewAvenger(avenger: Avenger) {
    this.avengerView = true;
    this.avengerViewSelected = avenger;
  }

  editAvenger(avenger: Avenger) {
    this.avengerEdit = true;
    this.avengerEditSelected = avenger;
  }

  removeAvenger(id: string) {
    this.avengersService.deleteAvenger(id).subscribe(
      () => this.avengers = this.avengersService.getAvengers()
    );
  }

}
