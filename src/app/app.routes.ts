import { Routes } from '@angular/router';
import { HomeComponent } from './pages/master/home/home.component';
//import { CarsListComponent } from './pages/cars/cars-list/cars-list.component';
//import { CarsAddComponent } from './pages/cars/cars-add/cars-add.component';
//import { LoginComponent } from './pages/authentication/login/login.component';
import { NotFoundComponent } from './pages/master/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '404', component: NotFoundComponent },
    /*{ path: 'cars/list', component: CarsListComponent },
    { path: 'cars/add', component: CarsAddComponent },*/
    /*{
        path: 'cars', children: [
            { path: 'list', component: CarsListComponent },
            { path: 'add', component: CarsAddComponent }
        ]
    },*/

    { path: 'cars', loadChildren: () => import('./pages/cars/cars.module').then(x => x.CarsModule) },

    //{ path: 'auth/login', component: LoginComponent },
    { path: 'auth', loadChildren: () => import('./pages/authentication/authentication.module').then(x => x.AuthenticationModule) },

    //{ path: 'bob/leponge', redirectTo: 'home', pathMatch: 'prefix' },

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: '**', redirectTo: '404' }
];
