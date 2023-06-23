import { ProductionCompany, ProductionCountry } from './../../models/movies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, map, filter, tap, switchMap } from 'rxjs';
import { MoviesInfo, TansformedMoviesInfo, moviesData } from '../../models/movies.interface';
import { ApiDetailsMovie, DetailsMovie } from '../../models/details.interface';
import { PopularFilmData, PopularMovie } from '../../models/popular.interface';
import { FilmData, Movie } from '../../models/movie.interface';
import { TopMovie, TopRatedFilms } from '../../models/top-rated.interface';
import { FilmsComing, upcomingFilms } from '../../models/upcoming.interfaces';
import { Apicredit } from '../../models/credit.interface';
import { MyMoviesInfo } from '../../models/my-movies.interface';
import { ViewMovie, ViewMovieTransformed } from '../../models/view.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {
  private BASE_URL: string = "https://api.themoviedb.org/3";
  private url: string = "https://64931a9b428c3d2035d154d7.mockapi.io"
  private base_page: number = 1;
 
  constructor(private http: HttpClient) { }
  get param(){
    return{
      api_key: "4f1ed8bee017bcf89ea9c4cf857af6cd",
      language: "es-Es",
    }
  }


  public getFilm(): Observable<Movie[]>{
    return this.http.get<FilmData>(`${this.BASE_URL}/movie/now_playing`, {params: this.param}).pipe(
      map((res)=>res.results)
    )
  }
  
  public getAllMovies(page: number): Observable<TansformedMoviesInfo[]> {
    return this.http.get<moviesData>(`${this.BASE_URL}/discover/movie`, {params: {...this.param, page}}).pipe(
      map((data: moviesData) => {
        return data.results.map((movie: MoviesInfo) => {
          return {
            genres: movie.genre_ids.map((genreId) => ({id: genreId, name: ''})), 
            backdrop_path: movie.backdrop_path,
            id: movie.id,
            overview: movie.overview,
            poster_path: movie.poster_path, 
            release_date: movie.release_date,
            runtime: 0, 
            title: movie.title,
            vote_average: movie.vote_average,
            view: false
          };
        });
      }),
      tap(() => {
        this.base_page += 1;
      })
    );
  }

  public getPopularFilm(): Observable<PopularMovie[]>{
    return this.http.get<PopularFilmData>(`${this.BASE_URL}/movie/popular`, {params: this.param}).pipe(
      map((r)=>r.results)
    )
  }

  public getTopRated(): Observable<TopMovie[]>{
    return this.http.get<TopRatedFilms>(`${this.BASE_URL}/movie/top_rated`, {params: this.param}).pipe(
      map((res)=>res.results)
    )
  }

  public getUpcomingFilm(): Observable<FilmsComing[]>{
    return this.http.get<upcomingFilms>(`${this.BASE_URL}/movie/upcoming`, {params: this.param}).pipe(
      map((res)=>res.results),
    )
  }


  public getDetailsMovies(id: number): Observable<DetailsMovie> {
    return this.http.get<ApiDetailsMovie>(`${this.BASE_URL}/movie/${id}`, { params: this.param }).pipe(
      map((movie: ApiDetailsMovie) => {
        return {
          genres: movie.genres,
          backdrop_path: movie.backdrop_path,
          id: movie.id,
          overview: movie.overview,
          poster_path: movie.poster_path,
          production_companies: movie.production_companies,
          production_countries: movie.production_countries,
          release_date: movie.release_date,
          runtime: movie.runtime,
          title: movie.title,
          vote_average: movie.vote_average,
          view: false,
          
        };
      })
    );
  }
  
  

  public getCredit(id:number): Observable<Apicredit>{
    return this.http.get<Apicredit>(`${this.BASE_URL}/movie/${id}/credits`, {params: this.param})
  }

  
  public getSearcher(text: string): Observable<Movie[]>{
    const params = {...this.param, query: text}
    return this.http.get<FilmData>(`${this.BASE_URL}/search/movie`, {params}).pipe(
      map((r)=>r.results),
      tap(()=>(
        this.base_page+=1
      ))
    )
  }


  

  public getCreateMovies(): Observable<MyMoviesInfo[]>{
    return this.http.get<MyMoviesInfo[]>(`${this.url}/MoviesCreate`)
  }

  public getMovieById(id: string): Observable<MyMoviesInfo> {
    return this.http.get<MyMoviesInfo>(`${this.url}/MoviesCreate/${id}`);
  }

  public createMovie(body: MyMoviesInfo): Observable<MyMoviesInfo>{
    return this.http.post<MyMoviesInfo>(`${this.url}/MoviesCreate`, body)
  }

  public editMovie(id:string, body: MyMoviesInfo): Observable<MyMoviesInfo>{
    return this.http.put<MyMoviesInfo>(`${this.url}/MoviesCreate/${id}`, body)
  }
  public deleteMovie(id:string): Observable<MyMoviesInfo>{
    return this.http.delete<MyMoviesInfo>(`${this.url}/MoviesCreate/${id}`)
  }

  public getFavoriteMovies(): Observable<ViewMovieTransformed[]> {
    return this.http.get<ViewMovie[]>(`${this.url}/viewMovie`).pipe(
      map((movies: ViewMovie[]) => {
        return movies.map((movie: ViewMovie) => {
          return {
            ...movie,
            
          };
        });
      })
    );
  }

  public addViewMovie(movie: ViewMovie): Observable<ViewMovieTransformed> {
    return this.http.post<ViewMovie>(`${this.url}/viewMovie`, movie).pipe(
      map((addedMovie: ViewMovie) => {
        return {
          ...addedMovie,
         
        };
      })
    );
  }

  public removeMovie(mockApiId: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/viewMovie/${mockApiId}`);
  }

  public isApiEmpty(): Observable<boolean> {
    return this.http.get<ViewMovie[]>(`${this.url}/viewMovie`).pipe(
      map((movies) => {
        return movies.length === 0;
      })
    );
  }
}
