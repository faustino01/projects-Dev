import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-cines',
  templateUrl: './crear-cines.component.html',
  styleUrls: ['./crear-cines.component.css']
})
export class CrearCinesComponent implements OnInit {
    constructor(private router:Router, private formBouilder:FormBuilder){}
    form!: FormGroup;

    ngOnInit(): void {
      this.form = this.formBouilder.group({
        Nombre:''
      })
    };

}
