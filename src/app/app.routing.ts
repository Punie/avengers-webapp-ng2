import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { AvengersComponent } from "./avengers/avengers.component";
import { AgentsComponent } from "./agents/agents.component";
import { AboutComponent } from "./about/about.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'avengers', component: AvengersComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'about', component: AboutComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
