import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-list-pelis',
  templateUrl: './list-pelis.component.html',
  styleUrls: ['./list-pelis.component.css']
})
export class ListPelisComponent implements OnInit {
  
  @Input()listPelis:any;

  ngOnInit(): void {
    
  }

}
