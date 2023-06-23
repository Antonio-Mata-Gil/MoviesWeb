
export interface MyMoviesInfo {
    title: string;
    genres: Genre;
    overview: string;
    poster_path: string;
    release_date: string;
    runtime: number;
    vote_average: number;
    view?: boolean;
    id: string;
   
    }
    
    export type Genre = "Acción" | "Aventura" | "Animación" | "Comedia" | "Crimen" | "Documental" | "Drama" | "Familia" | "Fantasía" | "Historia" | "Terror" | "Música" | "Misterio" | "Romance" | "Ciencia ficción" | "Película de TV" | "Suspense" | "Bélica" | "Western" ;
    
  
  
