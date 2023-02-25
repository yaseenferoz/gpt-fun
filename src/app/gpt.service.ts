import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GptService {
  private apiUrl = 'https://you-chat-gpt.p.rapidapi.com/TextOnly';

  constructor(private http: HttpClient) { }

  public post(data: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('X-RapidAPI-Key', '72ab11b691msh4ca84c578db4257p1db41bjsn64e412a7131c')
      .set('X-RapidAPI-Host', 'you-chat-gpt.p.rapidapi.com'); // set your desired headers here

    const body = JSON.stringify(data); // set your desired request body here

    return this.http.post(this.apiUrl, body, { headers });
  }
}
