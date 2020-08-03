import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

interface statusObj{
  statusName:string,
  statusList:string[]
}

@Component({
  selector: 'app-missionboard',
  templateUrl: './missionboard.component.html',
  styleUrls: ['./missionboard.component.css']
})

export class MissionboardComponent implements OnInit {

  teamName="צוות מנצח";

  constructor() { }
  // statusArray:statusObj[]=[
  //   {
  //     statusName:'כל המשימות',
  //     statusList:[
  //     'לחקור את רום',
  //     'לחקור את אלאור',
  //     ]
  //   },
  //   {
  //     statusName:'בתהליך',
  //     statusList: [
  //       'לחקור את רום',
  //       'לחקור את אלאור',
  //     ],
  //   },
  //   {
  //     statusName:'נחקר וטרם הוקלד',
  //     statusList:[

  //     ],
  //   },
  //   {
  //     statusName:'הוקלד',
  //     statusList:[
  //       'לחקור את דנה',
  //       'לחקור את אביב'
  //     ],
  //   },
  //   {
  //     statusName:'פיידבק',
  //     statusList: [
  //       'לחקור את טל',
  //       'לחקור את צחי',
  //       'לחקור את דנה',
  //       'לחקור את אביב'
  //     ],
  //   },
  //   {
  //     statusName:'הסתיים',
  //     statusList:[
  //       'לחקור את דנה',
  //       'לחקור את אביב'
  //     ]
  //   }
  // ];



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
      console.log(event.container.data)
      console.log(event.previousContainer.data)
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnInit() {
  }

}
