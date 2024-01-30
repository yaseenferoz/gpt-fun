import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GptService {
  private apiUrl = 'https://open-ai31.p.rapidapi.com/api/ai/';

  constructor(private http: HttpClient) { }

  public post(data: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('X-RapidAPI-Key', '70aeccc7d2msh7e18d9637c9b151p19a973jsn17d0323ccce6')
      .set('X-RapidAPI-Host',  'open-ai31.p.rapidapi.com'); // set your desired headers here

    const body = JSON.stringify(data); // set your desired request body here

    return this.http.post(this.apiUrl, body, { headers, responseType: 'text' });
  }
}
