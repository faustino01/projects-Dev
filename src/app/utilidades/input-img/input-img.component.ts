import { Component, EventEmitter, Input, Output } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent {
  @Input() imgImgC!:any;
  @Output() archivoSeleccionadoChild: EventEmitter<File> = new EventEmitter<File>();
  imagenBase64!: string;
  change(event:any){
    if(event.target.files.length > 0){
        const file: File =event.target.files[0];
        toBase64(file).then((value:any) => this.imagenBase64 = value)
        .catch(error => console.log(error));
        this.archivoSeleccionadoChild.emit(file)
        this.imgImgC = null;
    }
  }

}
