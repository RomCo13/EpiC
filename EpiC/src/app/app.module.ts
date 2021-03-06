import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {AppComponent} from './app.component';
import {MissionboardComponent} from './missionboard/missionboard.component';
import {CurrentstatusComponent} from './currentstatus/currentstatus.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule, MatIconModule, MatProgressBarModule, MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {Routes, RouterModule} from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MapComponent} from './map/map.component';
import {HttpClientModule} from '@angular/common/http';
import {GraphComponent} from './graph/graph.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { InvestigationsTableComponent } from './investigations-table/investigations-table.component'

const appRoutes:Routes=[
  {path:'', redirectTo: '/missions', pathMatch: 'full'},
  {path:'missions' , component:MissionboardComponent},
  {path:'status' , component:CurrentstatusComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    MissionboardComponent,
    CurrentstatusComponent,
    GraphComponent,
    MapComponent,
    TeamStatsComponent,
    InvestigationsTableComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    DragDropModule,
    MatCheckboxModule,
    MatProgressBarModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
