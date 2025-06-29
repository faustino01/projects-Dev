import { Injectable } from '@angular/core';
import { generoCreacionDTO, generoDTO } from './genero';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  public obtenerTodos():   Observable<generoDTO[]>{
    return this.http.get<generoDTO[]>(this.apiUrl+"generos");
  } 

  public crear(genero: generoCreacionDTO){
      return this.http.post(this.apiUrl+"generos",genero);
  }

 }
