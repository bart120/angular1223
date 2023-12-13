import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsAddComponent } from './cars-add/cars-add.component';
import { RouterModule, Routes } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material/material.module';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrandsService } from '../../services/brands.service';
import { adminGuard } from '../../guards/admin.guard';

const routes: Routes = [
  { path: 'list', component: CarsListComponent },
  { path: 'add', component: CarsAddComponent, canActivate: [adminGuard] },
  { path: 'detail/:id', component: CarsDetailComponent },
  { path: '', redirectTo: 'add', pathMatch: 'full' },

  { path: '**', redirectTo: 'list' }
];

@NgModule({
  declarations: [
    CarsListComponent,
    CarsAddComponent,
    CarsDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    CarsService,
    BrandsService
  ]
})
export class CarsModule { }
