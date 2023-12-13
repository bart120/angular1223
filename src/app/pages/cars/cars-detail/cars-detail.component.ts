import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html'
})
export class CarsDetailComponent implements OnInit {

  idOfRoute: number = 0;
  constructor(private _route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.idOfRoute = this._route.snapshot.params['id'];
  }


}
