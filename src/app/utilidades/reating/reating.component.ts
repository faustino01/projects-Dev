import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reating',
  templateUrl: './reating.component.html',
  styleUrls: ['./reating.component.css']
})
export class ReatingComponent implements OnInit {
  @Input() maximoRating = 5;
  @Input() ratingSeleccionado = 0;
  @Output() rated:  EventEmitter<number> = new EventEmitter<number>();
  maximoRatingArr:any[] = [];
  votado = false;
  ratingAnterior:any;

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0)
  }

  manejarMouseEnter(index:number):void{
    this.ratingSeleccionado = index+1;
  }

  manejarMouseLeave(){
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else{
      this.ratingSeleccionado = 0;
    }
  }
  
  rate(index:number):void{
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }

  
}
