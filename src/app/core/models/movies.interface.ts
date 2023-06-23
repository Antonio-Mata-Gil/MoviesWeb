export interface moviesData {
    page: number
    results: MoviesInfo[]
    total_pages: number
    total_results: number
  }
  
  export interface MoviesInfo {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  export interface TansformedMoviesInfo {
    genres: Genre[];
    backdrop_path: string;
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    runtime: number;
    title: string;
    vote_average: number
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