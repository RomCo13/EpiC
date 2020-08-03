import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { SidenavComponent } from './sidenav/sidenav.component'
import { AppComponent } from './app.component';
import { MissionboardComponent } from './missionboard/missionboard.component';
import { CurrentstatusComponent } from './currentstatus/currentstatus.component'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule , MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { Routes, RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GraphComponent } from './graph/graph.component'

const appRoutes:Routes=[
  {path:'' ,component:MissionboardComponent},
  {path:'missions' ,component:MissionboardComponent},
  {path:'status' ,component:CurrentstatusComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    MissionboardComponent,
    CurrentstatusComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    DragDropModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
