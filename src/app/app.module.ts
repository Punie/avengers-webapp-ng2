import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { AvengersComponent } from './avengers/avengers.component';
import { AgentsComponent } from './agents/agents.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header.component';
import { AvengersService } from "./avengers/avengers.service";
import { AgentsService } from "./agents/agents.service";
import { AvengerFilterPipe } from './avengers/avenger-filter.pipe';
import { AgentFilterPipe } from './agents/agent-filter.pipe';
import { AvengerOrderByPipe } from './avengers/avenger-orderby.pipe';
import { AgentOrderByPipe } from './agents/agent-orderby.pipe';
import { AvengerViewComponent } from './avengers/avenger-view/avenger-view.component';
import { AvengerEditComponent } from './avengers/avenger-edit/avenger-edit.component';
import { AvengerCreateComponent } from './avengers/avenger-create/avenger-create.component';
import { AgentCreateComponent } from './agents/agent-create/agent-create.component';
import { AgentEditComponent } from './agents/agent-edit/agent-edit.component';
import { AgentViewComponent } from './agents/agent-view/agent-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AvengersComponent,
    AgentsComponent,
    HomeComponent,
    HeaderComponent,
    AvengerFilterPipe,
    AgentFilterPipe,
    AvengerOrderByPipe,
    AgentOrderByPipe,
    AvengerViewComponent,
    AvengerEditComponent,
    AvengerCreateComponent,
    AgentCreateComponent,
    AgentEditComponent,
    AgentViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AvengersService,
    AgentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
