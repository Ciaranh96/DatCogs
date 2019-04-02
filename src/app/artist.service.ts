import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from './artist';
import { ARTISTS } from './mock-artists';
// import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ArtistService {

  // constructor(private messageService: MessageService) { }
  // constructor(
  // private http: HttpClient
  // //private messageService: MessageService
  // ) { }

  //private discogsAPI = 'https://api.discogs.com/database/search?artist';
  private discogsAPI ='https://api.discogs.com/database/search?artist=Nirvanna&per_page=3&token=mSyljxyHzMecUOywspInRcIuBbfiLBmgAKgyJXrR';
  //https://api.discogs.com/database/search?artist=' + $scope.artistName + '&per_page=3&token=mSyljxyHzMecUOywspInRcIuBbfiLBmgAKgyJXrR

  getArtists(): Observable<Artist[]> {
    // // TODO: send the message _after_ fetching the artists
    // this.messageService.add('ArtistService: fetched artists');
      return of(ARTISTS);
    //   return this.http.get<ARTIST[]>(this.discogsAPI)
    //   .pipe(
    //      tap(_ => this.log('fetched artists')),
    //   catchError(this.handleError('getArtists', []))
    // );
  }

  getArtist(id: number): Observable<Artist> {
    // // TODO: send the message _after_ fetching the artist
    // this.messageService.add(`ArtistService: fetched artist id=${id}`);
    // const url = '${this.discogsAPI}/${id}';
    // return this.http.get<Artist>(url).pipe(tap(_ => this.log('fetched artist id=${id}')),
    //  catchError(this.handleError<Artist>('getArtist id = ${id}'))
    // );
    return of(ARTISTS.find(artist => artist.id === id));
  }

  // private handleError<T> (operation = 'operation', result?: T){
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     this.log('${operation} failed: ${error.message}');
  //     return of(result as T);
  //   };
  // }
}
