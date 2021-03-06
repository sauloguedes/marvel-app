import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getComics(searchParams: any[] = []): Observable<any> {

    const params: HttpParams = this.getParams(searchParams)

    return this.httpClient.get<any>(`${environment.marvelApiUrl}/comics`, {
      params: params
    }).pipe(
      map((data: any) => data.data.results)
    )

  }

  public getComicById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.marvelApiUrl}/comics/${id}`, {
      params: new HttpParams().set('apikey', environment.marvelApiKey)
    }).pipe(
      map((data: any) => data.data.results[0])
    )
  }

  public getComicDetails(id: string) {

    let charactersUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/comics/${id}/characters?apikey=${environment.marvelApiKey}`)
    let eventsUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/comics/${id}/events?apikey=${environment.marvelApiKey}`)
    let storiesUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/comics/${id}/stories?apikey=${environment.marvelApiKey}`)

    return forkJoin([charactersUrl, eventsUrl, storiesUrl]);
  }

  public getCharacters(searchParams: any[] = []): Observable<any> {

    const params: HttpParams = this.getParams(searchParams)

    return this.httpClient.get(`${environment.marvelApiUrl}/characters`, {
      params: params
    }).pipe(
      map((data: any) => data.data.results)
    )
  }

  public getCharacterById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.marvelApiUrl}/characters/${id}`, {
      params: new HttpParams().set('apikey', environment.marvelApiKey)
    }).pipe(
      map((data: any) => data.data.results[0])
    )
  }

  public getCharactersDetails(id: string) {

    let comicsUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/characters/${id}/comics?apikey=${environment.marvelApiKey}`)
    let eventsUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/characters/${id}/events?apikey=${environment.marvelApiKey}`)
    let storiesUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/characters/${id}/stories?apikey=${environment.marvelApiKey}`)
    let seriesUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/characters/${id}/series?apikey=${environment.marvelApiKey}`)

    return forkJoin([comicsUrl, eventsUrl, storiesUrl, seriesUrl]);
  }

  public getSeries(searchParams: any[] = []): Observable<any> {

    const params: HttpParams = this.getParams(searchParams)

    return this.httpClient.get(`${environment.marvelApiUrl}/series`, {
      params: params
    }).pipe(
      map((data: any) => data.data.results)
    )

  }

  public getSerieById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.marvelApiUrl}/series/${id}`, {
      params: new HttpParams().set('apikey', environment.marvelApiKey)
    }).pipe(
      map((data: any) => data.data.results[0])
    )
  }

  public getSeriesDetails(id: string) {

    let charactersUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/series/${id}/characters?apikey=${environment.marvelApiKey}`)
    let comicsUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/series/${id}/comics?apikey=${environment.marvelApiKey}`)
    let eventsUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/series/${id}/events?apikey=${environment.marvelApiKey}`)
    let storiesUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/series/${id}/stories?apikey=${environment.marvelApiKey}`)

    return forkJoin([charactersUrl, comicsUrl, eventsUrl, storiesUrl]);
  }

  public getEvents(searchParams: any[] = []): Observable<any> {

    const params: HttpParams = this.getParams(searchParams)

    return this.httpClient.get(`${environment.marvelApiUrl}/events`, {
      params: params
    }).pipe(
      map((data: any) => data.data.results)
    )

  }

  public getEventById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.marvelApiUrl}/series/${id}`, {
      params: new HttpParams().set('apikey', environment.marvelApiKey)
    }).pipe(
      map((data: any) => data.data.results[0])
    )
  }

  public getEventsDetails(id: string) {

    let charactersUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/series/${id}/characters?apikey=${environment.marvelApiKey}`)
    let comicsUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/series/${id}/comics?apikey=${environment.marvelApiKey}`)
    let storiesUrl = this.httpClient.get<any>(`${environment.marvelApiUrl}/series/${id}/stories?apikey=${environment.marvelApiKey}`)

    return forkJoin([charactersUrl, comicsUrl, storiesUrl]);
  }

  private getParams(searchParams = []): HttpParams {

    let params: HttpParams = new HttpParams()

    for (const p of searchParams) {
      params = params.append(p.property, p.value);
    }

    // Adding apikey
    params = params.append('apikey', environment.marvelApiKey)

    return params
  }

}
