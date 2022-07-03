import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { LoadingComponent } from '../shared/loading/loading.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean = false;
  mensajeError: string | any;

  constructor( private spotify: SpotifyService ) { 

    this.loading = true;

    this.spotify.getNewReleases()
        .subscribe( (data:any) =>{    
          console.log( data );
          this.nuevasCanciones = data;
          this.loading = false;
        }, (error)=>{
            this.loading = false;
            this.error = true;
            this.mensajeError = error.error.error.message;
        });
  }
}
