import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {
  constructor(private ActivatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params =>{
      alert(params['id'])
    })
  }

}
