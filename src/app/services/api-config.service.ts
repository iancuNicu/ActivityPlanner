import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {tap} from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

import {toPromise} from 'rxjs/operator/toPromise';
import {ClientKeys} from '../view-model/clientKeys';

@Injectable()
export class ApiConfigService {

  constructor(private http: HttpClient) { }

  getConfigKeys(): Observable<ClientKeys> {
   return this.http.get<ClientKeys>('/api/config');
  }

}
