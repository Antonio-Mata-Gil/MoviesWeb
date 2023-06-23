export interface ViewMovie {
    genres: Genre[];
    backdrop_path: string;
    id: string;
    overview: string;
    poster_path: string;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    release_date: string;
    runtime: number;
    title: string;
    vote_average: number
    view?: boolean;
    
    
    }

    export interface ViewMovieTransformed {
      genres: Genre[];
      backdrop_path: string;
      id: string;
      overview: string;
      poster_path: string;
      production_companies?: ProductionCompany[];
      production_countries?: ProductionCountry[];
      release_date: string;
      runtime: number;
      title: string;
      vote_average: number
     mockApiId?: string; 
     view?: boolean;
      
      }

    export interface Genre {
        id: number
        name: string
      }
    export interface ProductionCompany {
        id: number
        logo_path?: string
        name: string
        origin_country: string
      }
      
      export interface ProductionCountry {
        iso_3166_1: string
        name: string
      }