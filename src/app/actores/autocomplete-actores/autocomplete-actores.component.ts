import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { actoresSelectMoviesDTO } from '../actores';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent  implements OnInit{

  @Input() actoresSeleccionadosCHILD:actoresSelectMoviesDTO[] = [];

  control:FormControl = new FormControl();
  urll = "assets/img/actores/";
  actores:actoresSelectMoviesDTO[] = [
              {Nombre:'Arnold tzanegerl',personaje : '', foto: this.urll+'arnold.jpg'},
              {Nombre:'Marinly Monroe',personaje : '', foto: this.urll+'monroe.jpg'},
              {Nombre:'Tom Hanks ',personaje : '', foto: this.urll+'hank.jpg'},
            ];
  actoresOriginal = this.actores;

  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores =this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.Nombre.indexOf(valor) !== -1);
    });
  }

  // actoresSeleccionadosCHILD:actoresSelectMoviesDTO[] = [];
  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  optionSelect(event: MatAutocompleteSelectedEvent){
        console.log(event.option.value)
        this.actoresSeleccionadosCHILD.push(event.option.value);
        this.control.patchValue('');
        if(this.table !== undefined){
          this.table.renderRows();
        }
    }

  eliminar(actor:any){
    const indice = this.actoresSeleccionadosCHILD.findIndex((item: { Nombre: any; }) => item.Nombre === actor.Nombre);
    this.actoresSeleccionadosCHILD.splice(indice, 1);
    this.table.renderRows();

  }

  finalizarArrastre(event: CdkDragDrop<any[]>){
    const indicePrevio = this.actoresSeleccionadosCHILD.findIndex(
      actor => actor === event.item.data
    );
    moveItemInArray(this.actoresSeleccionadosCHILD, indicePrevio, event.currentIndex);
    this.table.renderRows();

  }
}
