import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import * as olProj from 'ol/proj';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: Map;
  constructor() { }

  initMap() {
    this.map = new Map({
      target: 'map',
        view: new View({
          center: olProj.fromLonLat([34.7622266, 32.0879994]),
          zoom: 7
        }),
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
    });
  }

  ngOnInit() {
    this.initMap();
  }

}
