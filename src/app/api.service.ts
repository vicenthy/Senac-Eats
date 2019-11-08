import {environment} from './../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {throwError, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErros(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${environment.url_api}${path}`, {params})
      .pipe(catchError(this.formatErros));
  }

  post(
    path: string,
    body: any = {},
    headers: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.post(`${environment.url_api}${path}`, body, headers).pipe(
      catchError(this.formatErros)
    );
  }

  put(
    path: string,
    body: any = {},
    headers: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.put(`${environment.url_api}${path}`, body, headers).pipe(
      catchError(this.formatErros)
    );
  }

  delete(path: string): Observable<any> {
    return this.http
      .delete(`${environment.url_api}${path}`)
      .pipe(catchError(this.formatErros));
  }
}
