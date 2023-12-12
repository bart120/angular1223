import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../../models/car.model';
import { CarsService } from '../../../services/cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html'
})
export class CarsListComponent implements OnInit {
  cars: Array<CarModel> = [];

  //private _servCars:CarsService;

  constructor(private _servCars: CarsService) {
    //this._servCars = servCars;
  }

  ngOnInit(): void {
    this.cars = this._servCars.getCars();

  }


}
