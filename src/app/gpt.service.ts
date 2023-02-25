import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GptService {
  private apiUrl = 'https://chatgpt-ai-chat-bot.p.rapidapi.com/ask';

  constructor(private http: HttpClient) { }

  public post(data: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('X-RapidAPI-Key', '17f87f333emshff154a04bb29554p1ac694jsncc6b6af96fbc')
      .set('X-RapidAPI-Host', 'chatgpt-ai-chat-bot.p.rapidapi.com'); // set your desired headers here

    const body = JSON.stringify(data); // set your desired request body here

    return this.http.post(this.apiUrl, body, { headers, responseType: 'text' });
  }
}
