import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }

  // URL FOR NEWS API
  // api key : be5c3549923ecfd08cb7b7964ee3db8b

  newsApiUrl = "https://gnews.io/api/v4/search?q=example&token=be5c3549923ecfd08cb7b7964ee3db8b";


  // heading 
  
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
}
