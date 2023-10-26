import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Teste4SharedService {
  constructor(private http: HttpClient) {}

  getHttpWithPromise(delay: number) {
    return this.http.get('http://localhost:3000/delay/' + delay).toPromise();
  }

  getHttpWithObservable(delay = 1) {
    return this.http.get('http://localhost:3000/delay/' + delay);
  }
}
