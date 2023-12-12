import { Injectable } from "@angular/core";
import { CarModel } from "../models/car.model";

// @Injectable({providedIn: 'root'}) // service accessible partout sans besoin de providers dans les modules
@Injectable()
export class CarsService {
    getCars(): Array<CarModel> {
        return [
            { id: 4, model: 'test1' },
            { id: 5, model: 'test2' },
            { id: 6, model: 'test3' },
        ];
    }
}

