import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mapa: Mapboxgl.Map;

  ngOnInit() {

    Mapboxgl.accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-79.4697205, -1.0197277],
      zoom: 14.33
    });
  }

}
