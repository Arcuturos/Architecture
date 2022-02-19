import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProyectosComponent} from './components/proyectos/proyectos.component';

export const ROUTES: Routes = [
    {path:'home', component: HomeComponent },
    {path:'proyectos', component: ProyectosComponent},
    {path:'proyectos/proyectos/:id', component: ProyectosComponent},

    {path: '**', pathMatch: 'full', redirectTo:'home'}
];

//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);