import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { side_nav_data, sectionNode } from './tree-data-config';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  treeControl = new NestedTreeControl<sectionNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<sectionNode>();
  message = side_nav_data.message
  text = side_nav_data.text
  openInvs = 1000

  constructor() {
    this.dataSource.data = side_nav_data.TREE_DATA;
   }

  ngOnInit() {
  }

  hasChild = (_: number, node: sectionNode) => !!node.children && node.children.length > 0;
}
