import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs/Observable";

import { Avenger } from "./avenger";
import { AvengersService } from "./avengers.service";

@Component({
  selector: 'av-avengers',
  templateUrl: './avengers.component.html',
  styles: [`
    th {
      cursor: pointer;
    }
  `]
})
export class AvengersComponent implements OnInit {
  avengers: Observable<Avenger[]>;
  avengerSelected: Avenger;
  avengerView = false;
  avengerCreate = false;
  avengerEdit = false;
  avOrderBy: string;


  constructor(private avengersService: AvengersService) { }

  ngOnInit() {
    this.avengers = this.avengersService.getAvengers();
  }

  viewAvenger(avenger: Avenger) {
    this.avengerCreate = false;
    this.avengerEdit = false;
    this.avengerView = true;
    this.avengerSelected = avenger;
  }

  createAvenger() {
    this.avengerView = false;
    this.avengerEdit = false;
    this.avengerCreate = true;
  }

  editAvenger(avenger: Avenger) {
    this.avengerView = false;
    this.avengerCreate = false;
    this.avengerEdit = true;
    this.avengerSelected = avenger;
  }

  removeAvenger(id: string) {
    this.avengersService.deleteAvenger(id).subscribe(() => {
      this.avengerView = false;
      this.avengerEdit = false;
      this.avengers = this.avengersService.getAvengers()
    });
  }

  refreshView() {
    this.avengerView = false;
    this.avengerCreate = false;
    this.avengerEdit = false;
    this.avengers = this.avengersService.getAvengers();
  }

  closePanel() {
    this.avengerView = false;
    this.avengerCreate = false;
    this.avengerEdit = false;
  }

}
