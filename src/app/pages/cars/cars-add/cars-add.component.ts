import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrandModel } from '../../../models/brand.model';
import { BrandsService } from '../../../services/brands.service';
import { CarsService } from '../../../services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html'
})
export class CarsAddComponent implements OnInit {

  formCar: FormGroup;
  brands: Array<BrandModel> = [];

  constructor(private _servBrand: BrandsService,
    private _servCar: CarsService,
    private _router: Router) {
    this.formCar = new FormGroup({
      model: new FormControl('', [Validators.required, Validators.minLength(5)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      dateOfCirculation: new FormControl('', [Validators.required]),
      brandID: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this._servBrand.getBrands().subscribe(data => {
      this.brands = data;
    });
  }

  onSubmit(): void {
    console.log(this.formCar);
    if (this.formCar.status === "VALID") {
      this._servCar.insert(this.formCar.value).subscribe(data => {
        //alert("Voiture ajoutée avec l'id " + data.id);
        alert(`Voiture ${data.model} ajoutée avec l'id ${data.id}`);
        //this._router.navigate(['/cars/list']);
        this._router.navigate(['/cars/detail', data.id]);
      });
    } else {
      alert("Erreur dans le formulaire");
    }
  }

}
