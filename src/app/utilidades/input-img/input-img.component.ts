import { Component } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent {
  imagenBase64!: string;
  change(event:any){
    if(event.target.files.length > 0){
        const file: File =event.target.files[0];
        toBase64(file).then((value:any) => this.imagenBase64 = value)
        .catch(error => console.log(error));
    }
  }

}
