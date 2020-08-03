import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }
  LineChart=[];

  ngOnInit() {
    this.LineChart = new Chart('linechart',{
      type:'line',
      data:{
        labels:['January', 'February', 'Mars', 'April'],
        datasets:[{
          label:'כמות מקרים חדשים',
          data:[9,7,3,2],
          fill:false,
          lineTension:0.2,
          borderColor:"red",
          borderWidth:1
        },
        {
        label:'קצב התקדמות המחקר',
          data:[2,7,5,4],
          fill:false,
          lineTension:0.2,
          borderColor:"blue",
          borderWidth:1
        }
      ]
      },
      options:{
        title:{
          text:"גרף ממצאים",
          display:true
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero:true
            }
          }]
        }
      }
    })
  }


}
