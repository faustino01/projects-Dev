import { Component, Input } from '@angular/core';
import { MultipleSelectorModel } from './MultipleSelectorModel';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent {
  @Input() Seleccionados: MultipleSelectorModel[] = [];
  @Input() NoSeleccionados : MultipleSelectorModel[] = [];
  seleccionarTodo(){
      this.Seleccionados.push(...this.NoSeleccionados);
      this.NoSeleccionados = [];
  }
  desseleccionarTodo(){
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados = [];
  }
  seleccionar(item: MultipleSelectorModel, index:number){

    this.Seleccionados.push(item)
    this.NoSeleccionados.splice(index,1);
  }
  desseleccionar(item:MultipleSelectorModel, index:number){
    console.log(item);
    console.log(index);
    this.NoSeleccionados.push(item);
    this.Seleccionados.splice(index,1)
  }
}
