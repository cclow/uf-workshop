import { Injectable, Inject } from "@angular/core";
import { BACKEND_URL, WS_BACKEND_URL } from '../tokens';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { FeathersService, io, feathers, socketio } from "./feathers";

@Injectable()
export class ApiService {
  constructor(private http: Http,
              @Inject(BACKEND_URL) private backendUrl: string,
              @Inject(WS_BACKEND_URL) private wsBackendUrl: string) {}
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  wsConnect(path: string): FeathersService {
    let socket = io(this.wsBackendUrl);
    socket.on('connect', () => {
      //
    });
    return feathers()
      .configure(socketio(socket))
      .service(path);
  }

  private handleErrors(res: Response) {
    if (!res.ok) {
      let errorText = `${res.status} = ${res.statusText}`;
      console.error(errorText);
      throw new Error(errorText);
    }
  }

  private extractJson(res: Response) {
    return res.json() || {};
  }

  get(path: string): Observable<any> {
    return this.http.get(`${this.backendUrl}/${path}`, {headers: this.headers})
      .do(this.handleErrors)
      .map(this.extractJson)
      .pluck('data');
  }

  post(path: string, body: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/${path}`, body, {headers: this.headers})
      .do(this.handleErrors)
      .map(this.extractJson);
  }

  put(path: string, body: any): Observable<any> {
    return this.http.put(`${this.backendUrl}/${path}`, body, {headers: this.headers})
      .do(this.handleErrors)
      .map(this.extractJson);
  }

  del(path: string): Observable<any> {
    return this.http.delete(`${this.backendUrl}/${path}`, {headers: this.headers})
      .do(this.handleErrors)
      .map(this.extractJson);
  }
}
