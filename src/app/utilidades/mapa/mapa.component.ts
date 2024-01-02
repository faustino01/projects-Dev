import { Component, EventEmitter, Output } from '@angular/core';
import { LeafletMouseEvent, Marker, latLng, marker, tileLayer } from 'leaflet';
import { coordenadaDTO } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  @Output() coordenadaSelect:EventEmitter<coordenadaDTO> = new EventEmitter<coordenadaDTO>();

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 10,
    center: latLng(25.702060386742353, -100.31547190988815)
  };

  capas : Marker<any>[] = [];

  manejarclick(event:LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log({latitud,longitud});
    this.capas = [];
    this.capas.push(marker([latitud,longitud]));
    this.coordenadaSelect.emit({latitud:latitud,longitud:longitud});
  }
}
