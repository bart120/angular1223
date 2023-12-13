import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BrandModel } from "../models/brand.model";

@Injectable()
export class BrandsService {
    constructor(private _http: HttpClient) { }

    getBrands(): Observable<Array<BrandModel>> {
        return this._http.get<BrandModel[]>("https://formation.inow.fr/demo/api/v1/brands");
    }
}