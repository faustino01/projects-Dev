import { Component } from '@angular/core';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent {
  constructor(private generosService: GenerosService){}
  ngOnInit(): void {
    this.generosService.obtenerTodos().subscribe(generos => {
      console.log(generos);
    }, error => console.error(error));
  }
}
