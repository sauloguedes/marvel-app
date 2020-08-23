import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getComics(): Observable<any> {
    return this.httpClient.get<any>(`${environment.marvelApiUrl}/comics`, {
      params: new HttpParams().set('apikey', environment.marvelApiKey)
    }).pipe(
      map((data: any) => data.data.results)
    )
  }

  public getCharacters(): Observable<any> {
    return this.httpClient.get(`${environment.marvelApiUrl}/characters`, {
      params: new HttpParams().set('apikey', environment.marvelApiKey)
    })
  }

  public getSeries(): Observable<any> {
    return this.httpClient.get(`${environment.marvelApiUrl}/series`, {
      params: new HttpParams().set('apikey', environment.marvelApiKey)
    })
  }

  public getEvents(): Observable<any> {
    return this.httpClient.get(`${environment.marvelApiUrl}/events`, {
      params: new HttpParams().set('apikey', environment.marvelApiKey)
    })
  }

}
