import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http: HttpClient) { }

  // URL FOR NEWS API
  // api key : be5c3549923ecfd08cb7b7964ee3db8b


  newsApiUrl = "https://gnews.io/api/v4/search?q=example&lang=en&country=us&token=be5c3549923ecfd08cb7b7964ee3db8b";
  entertainmentApiUrl = "https://gnews.io/api/v4/search?q=entertainment&lang=en&country=us&topic=entertainment&token=be5c3549923ecfd08cb7b7964ee3db8b";
  healthApiUrl = "https://gnews.io/api/v4/search?q=health&lang=en&country=us&topic=entertainment&token=be5c3549923ecfd08cb7b7964ee3db8b";

  // heading 

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  entertainment(): Observable<any> {
    return this._http.get(this.entertainmentApiUrl);
  }

  health(): Observable<any> {
    return this._http.get(this.healthApiUrl);
  }


}
