import { Component } from '@angular/core';

import { Observable, Subscriber } from "rxjs";

@Component({
  selector: 'av-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  time = new Observable<Date>((observer: Subscriber<Date>) => {
    setInterval(() => observer.next(new Date()), 10);
  });
}
