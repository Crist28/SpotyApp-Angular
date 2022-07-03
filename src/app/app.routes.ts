import { RouterModule, Routes } from "@angular/router";
import { ArtistaComponent } from "./components/artista/artista.component";

import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },    
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);