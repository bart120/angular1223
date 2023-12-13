import { Injectable } from "@angular/core";
import { CarModel } from "../models/car.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// @Injectable({providedIn: 'root'}) // service accessible partout sans besoin de providers dans les modules
@Injectable()
export class CarsService {
    constructor(private _http: HttpClient) {

    }

    /*get(endpoints: string, params: string): Observable<any> {
        return this._http.get<any>(`${endpoints}/${params}`);
    }*/

    getById(id: number): Observable<CarModel> {
        return this._http.get<CarModel>(`https://formation.inow.fr/demo/api/v1/cars/${id}`);
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

    insert(car: CarModel): Observable<CarModel> {
        console.log(car);
        return this._http.post<CarModel>("https://formation.inow.fr/demo/api/v1/cars", car);
    }

    /*(resp:any) =>{
        
    }*/
    /*toto(resp:any):void{

    }*/
}

