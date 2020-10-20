import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseApiURL: string = "http://localhost:3977" + "/api/";

  constructor(private http: HttpClient) {

  }


  get(url: string, obj: any) {

    console.log(this.baseApiURL + url, this.setHeaders(obj));
    return this.http.get(this.baseApiURL + url, this.setHeaders(obj)).toPromise();
  }

  post(url: string, obj: any) {
    return this.http.post(this.baseApiURL + url, this.setHeaders(obj)).toPromise();
  }




  private setHeaders(params) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');


    /* const accessToken = this.localStorageService.get('token');*/
    let reqData: any;
    reqData = {
      headers: headers,
    };
    /*
    if (null != localStorage.getItem('token')) {
      reqData.token = JSON.parse(localStorage.getItem('token')).access_token;
    }*/


    if (params) {

      Object.keys(params).map(k => {
        reqData[k] = params[k];
      });

    }
    return reqData;
  }

}
