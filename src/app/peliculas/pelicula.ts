export interface peliCreacionDTO{
  titulo:string;
  resumen:string;
  enCines:boolean;
  fechaLanzamiento: Date;
  trailer:string;
  poster: File;

}

export interface peliDTO{
  titulo:string;
  resumen:string;
  enCines:boolean;
  fechaLanzamiento: Date;
  trailer:string;
  poster: string;

}
