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

    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-79.5001181, -1.0196141],
      zoom: 13
    });
    this.crearMarcador(-79.4687127, -1.0134393);
  }

  crearMarcador(lng: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: true
    }).setLngLat([lng, lat])
    .addTo(this.mapa);

    marker.on('drag', () => {console.log(marker.getLngLat())});
  }

}