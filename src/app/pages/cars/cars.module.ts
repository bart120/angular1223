import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsAddComponent } from './cars-add/cars-add.component';
import { RouterModule, Routes } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material/material.module';

const routes: Routes = [
  { path: 'list', component: CarsListComponent },
  { path: 'add', component: CarsAddComponent },
  { path: '', redirectTo: 'add', pathMatch: 'full' },

  { path: '**', redirectTo: 'list' }
];

@NgModule({
  declarations: [
    CarsListComponent,
    CarsAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    CarsService,

  ]
})
export class CarsModule { }
