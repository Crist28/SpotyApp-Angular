import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB6VlBhHQFjIHeTD8ebUCaryJqxBmVyW5AcLtM7i8wrY4AbMyeVFell8aNW7oOgT25yei-2SXKaNMOLYAbyJT9-7WbFxQsvuI9P-mdOQEVgnfdhCDM'
    });

    return this.http.get(url, { headers });

  }


  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( (data:Data) => data['albums'].items ));

  }

  getArtistas( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( (data:Data) => data['artists'].items));

  }

  getArtista( id: string ) {

    return this.getQuery(`artists/${ id }`);
                // .pipe( map( data => data['artists'].items));

  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( (data:Data) => data['tracks']));

  }

}