import {Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import * as olProj from 'ol/proj';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: Map;
  vectorSource;

  constructor(private httpClient: HttpClient) {
    const locationsUrl = 'http://EpiC-api/locations';
    this.httpClient.get(locationsUrl).subscribe((locations: any[]) => {
      locations.forEach(location => this.convertAddressToLatLong(location));
    });
  }

  convertAddressToLatLong(address: string) {
    const apiKey = 'c575f2c002de4de9aa863ae8e0d17fab';
    const addressToLatLongUrl = `https://api.opencagedata.com/geocode/v1/google-v3-json?address=${address}&pretty=1&key=${apiKey}`;
    this.httpClient.get(addressToLatLongUrl).subscribe((response: any) => {
      const {lat, lng} = response.results[0].geometry.location;
      const iconFeature = new Feature({
        geometry: new Point(olProj.transform([lng, lat], 'EPSG:4326', 'EPSG:3857')),
        name: 'Null Island',
        population: 4000,
        rainfall: 500
      });

      this.vectorSource.addFeature(iconFeature);
    });
  }

  initMap() {

    const iconFeatures = [];

    // Remove when getting the data from the url.
    const iconFeature = new Feature({
      geometry: new Point(olProj.transform([34.7622266, 32.0879994], 'EPSG:4326', 'EPSG:3857')),
      name: 'Null Island',
      population: 4000,
      rainfall: 500
    });

    iconFeatures.push(iconFeature);

    this.vectorSource = new VectorSource({
      features: iconFeatures
    });

    const iconStyle = new Style({
      image: new Icon(({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        scale: 0.05,
        src: 'https://image.flaticon.com/icons/svg/1397/1397898.svg'
      }))
    });

    const vectorLayer = new VectorLayer({
      source: this.vectorSource,
      style: iconStyle
    });

    this.map = new Map({
      controls: [],
      target: 'map',
      view: new View({
        center: olProj.fromLonLat([34.7622266, 32.0879994]),
        zoom: 7
      }),
      layers: [
        new TileLayer({source: new OSM()}),
        vectorLayer
      ],
    });
  }

  ngOnInit() {
    this.initMap();
  }

}
