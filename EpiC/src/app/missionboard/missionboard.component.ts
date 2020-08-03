import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-missionboard',
  templateUrl: './missionboard.component.html',
  styleUrls: ['./missionboard.component.css']
})
export class MissionboardComponent implements OnInit {

  teamName="צוות מנצח";

  constructor() { }

  alltasks = [
    'לחקור את רום',
    'לחקור את אלאור',

  ];
  inProgress=[

  ];
  beforeTyping = [
    'לחקור את דנה',
    'לחקור את אביב'
  ];

  afterTyping = [
    'לחקור את דנה',
    'לחקור את אביב'
  ];

  feedback = [
    'לחקור את טל',
    'לחקור את צחי',
    'לחקור את דנה',
    'לחקור את אביב'
  ];

  finished = [
    'לחקור את דנה',
    'לחקור את אביב'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log(this.alltasks)
  }

  ngOnInit() {
  }

}
