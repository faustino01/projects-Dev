import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeafletMouseEvent, Marker, icon, latLng, marker, tileLayer } from 'leaflet';
import { coordenadaDTO } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit{


  @Input() coordenadaInicialchild:coordenadaDTO[] = [];
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
    this.capas.push(marker([latitud,longitud],{
      icon : icon({
        iconSize: [25,41],
        iconAnchor:[13,41],
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'markert-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }));
    this.coordenadaSelect.emit({latitud:latitud,longitud:longitud});
  }

  ngOnInit(): void {
    this.capas = this.coordenadaInicialchild.map(valor => marker([valor.latitud,valor.longitud],{
      icon : icon({
        iconSize: [25,41],
        iconAnchor:[13,41],
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'markert-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }));
  }
}
