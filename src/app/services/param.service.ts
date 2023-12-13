/*import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ParamService {
    //constructor(private _servApi: ApiService<ParamModel>)
    constructor(private _servApi: ApiService<any>) {

    }

    getParam(): Observable<ParamModel> {
        return this._servApi.get('Param', new HttpParams().append('cas', 'messageAccueil'));
    }
}*/