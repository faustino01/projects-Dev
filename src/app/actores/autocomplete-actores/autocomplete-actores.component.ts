import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent  implements OnInit{

  control:FormControl = new FormControl();
  actores = [
              {nombre:'tomi', foto: 'url'},
              {nombre:'drake', foto: 'url'},
              {nombre:'josh', foto: 'url'},
            ];
  actoresOriginal = this.actores;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores =this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);
    });
  }


  actoresSeleccionados:any = [];
  optionSelect(event: MatAutocompleteSelectedEvent){
        console.log(event.option.value)
        this.actoresSeleccionados.push(event.option.value);
        this.control.patchValue('');
    }
}
