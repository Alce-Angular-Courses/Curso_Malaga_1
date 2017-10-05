import { AboutComponent } from './about/about.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AutoresComponent } from './autores/autores.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
     { path: 'home', component: HomeComponent },
     { path: 'autores', component: AutoresComponent },
     { path: 'catalogo', component: CatalogoComponent },
     { path: 'enlaces', component: EnlacesComponent },
     { path: 'about', component: AboutComponent },
     { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
