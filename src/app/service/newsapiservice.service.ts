import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }

  // URL FOR NEWS API
  // api key : f9fbaedf0f5448d58561f12e9a8c81dc

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f9fbaedf0f5448d58561f12e9a8c81dc";


  // heading 
  
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
}
