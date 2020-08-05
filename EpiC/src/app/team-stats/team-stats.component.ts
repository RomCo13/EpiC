import { Component, OnInit } from '@angular/core';

interface team{
  name:string,
  done:number,
  total:number
}

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {

  constructor() { }

  teamProgress:team[]=[
    {
      name:'נטע',
      done:2,
      total:5

    },
    {
      name:'דניאל',
      done:1,
      total:6,

    },
    {
      name:'רועי',
      done:5,
      total:6
    }
  ]
  ngOnInit() {
  }
  invsAmount=40;

}
