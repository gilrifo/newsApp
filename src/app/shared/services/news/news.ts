import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class News {
  private apiKey = 'f5fd836811d8443f976f34c900bdd7de';
  private baseUrl = '';

  constructor(private http:HttpClient){
  }

getNews(): Observable<any>{
  const url = `${this.baseUrl}?q=tesla&from=2025-08-05&sortBy=publishedAt&apiKey=${this.apiKey}`;
    return this.http.get(url);
}

}
