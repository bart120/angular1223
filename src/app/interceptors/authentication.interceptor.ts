import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthenticationInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //code a exécuter avant l'appel
        const head = req.headers.append('Authorization', 'Bearer FDSQHGGDSHGSFDDQTGFSDQGSHDSGFDHF');
        const newReq: HttpRequest<any> = req.clone({ headers: head });

        return next.handle(newReq);
    }

}