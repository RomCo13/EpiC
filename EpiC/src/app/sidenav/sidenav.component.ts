import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import {  } from '@angular/material/button'

interface sectionNode {
  name: string;
  children?: sectionNode[];
}
const TREE_DATA: sectionNode[] = [
  {
    name: 'צפון',
    children: [
      {name: 'צפת'},
      {name: 'כנרת'},
    ]
  },
  {
    name: 'חיפה',
    children: [
      {name: 'חיפה'},
      {name: 'חדרה'},
    ]
  },
  {
    name: 'מרכז',
    children: [
      {name: 'שרון',
      children:[
        {name:'צוות חקירה אלוף'},
        {name:'צוות חקירה מנצח'},
        {name:'צוות חקירה ענק'},
      ]
    },
      {name: 'רמלה'},
      {name: 'רחובות'},
    ]
  },
  {
    name: 'ירושלים',
  },
  {
    name: 'אשקלון',
  },
  {
    name: 'דרום',
  },
];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  treeControl = new NestedTreeControl<sectionNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<sectionNode>();
  message='תמונת מצב מחוזות'
  text='סהכ חקירות פתוחות : '
  openInvs=1000;

  constructor() {
    this.dataSource.data = TREE_DATA;
   }

  ngOnInit() {
  }

  hasChild = (_: number, node: sectionNode) => !!node.children && node.children.length > 0;
}
