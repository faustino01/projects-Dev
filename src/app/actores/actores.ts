export interface actoresCreacionDTO{
    Nombre : string;
    fechaNacimiento : Date;
    foto : File;
    biografia: string;
}

export interface actoresDTO{
    Nombre : string;
    fechaNacimiento : Date;
    foto : string;
    biografia: string;
}

export interface actoresSelectMoviesDTO{
    Nombre:string;
    personaje:string;
    foto:string;   
}