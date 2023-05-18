import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get apiBaseUrl(): string {
    return environment.apiUrl;
  }

  post(url: string, body: any): any {
    return this.httpClient.post(url, body);
  }

  get(url: string): any {
    return this.httpClient.get(url);
  }

  put(url: string, body: any): any {
    return this.httpClient.put(url, body);
  }

  delete(url: string): any {
    return this.httpClient.delete(url);
  }

  patch(url: string, body: any): any {
    return this.httpClient.patch(url, body);
  }
}
