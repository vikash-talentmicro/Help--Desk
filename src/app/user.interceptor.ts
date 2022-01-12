import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export default class userInterceptor{

intercept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{

  const req1 = req.clone({
    setHeaders:{
        "user" : "mainUser"
    }
  })
  return handler.handle(req1);
}

}