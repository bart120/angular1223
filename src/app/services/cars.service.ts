import { Injectable } from "@angular/core";
import { CarModel } from "../models/car.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// @Injectable({providedIn: 'root'}) // service accessible partout sans besoin de providers dans les modules
@Injectable()
export class CarsService {
    constructor(private _http: HttpClient) {

    }

    getCars(): Observable<Array<CarModel>> {
        //console.log("getCars");
        /*return [
            { id: 4, model: 'test1' },
            { id: 5, model: 'test2' },
            { id: 6, model: 'test3' },
        ];*/
        //this._http.get("https://formation.inow.fr/demo/api/v1/cars").subscribe(this.toto)
        /*this._http.get<Array<CarModel>>("https://formation.inow.fr/demo/api/v1/cars").subscribe((data) => {
            console.log(data);
            return data;
        });
        console.log("FIN getcars");
        return [];*/
        return this._http.get<Array<CarModel>>("https://formation.inow.fr/demo/api/v1/cars");
    }

    /*(resp:any) =>{
        
    }*/
    /*toto(resp:any):void{

    }*/
}

