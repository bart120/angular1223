import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsAddComponent } from './cars-add/cars-add.component';



@NgModule({
  declarations: [
    CarsListComponent,
    CarsAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarsModule { }
