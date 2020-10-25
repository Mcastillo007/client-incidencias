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
    console.log(obj);
    return this.http.post(this.baseApiURL + url,  obj, this.getPostHeaders()).toPromise();
  }
  delete(url: string, obj:any) {
    console.log(obj);
    return this.http.delete(this.baseApiURL + url, this.getPostHeaders()).toPromise();
  }




  private setHeaders(params) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');


   
    let reqData: any;
    reqData = {
      headers: headers,
    };
  
    if (null != localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'));
      headers.append('Authorization','"'+ localStorage.getItem('token')+'"');
      reqData.Authorization = localStorage.getItem('token');
    }

    if (params) {

      Object.keys(params).map(k => {
        reqData[k] = params[k];
      });

    }
    return reqData;
  }

  private getPostHeaders(): {} {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log(httpOptions);
    return httpOptions;
  }

}
