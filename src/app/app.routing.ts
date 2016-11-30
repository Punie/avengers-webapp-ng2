import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { AvengersComponent } from "./avengers/avengers.component";
import { AgentsComponent } from "./agents/agents.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'avengers', component: AvengersComponent },
  { path: 'agents', component: AgentsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
