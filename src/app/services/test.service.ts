import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Confis } from '../entities/Confis';
import { Datas } from '../entities/Datas';
import {map} from 'rxjs/operators';

@Injectable()
export class TestService {

    constructor(private httpClient: HttpClient) {
    }

    getHeaders(): HttpHeaders {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return headers;
    }

    getRapid(): Observable<Datas> {
        return this.httpClient.get<Datas>('http://localhost:3000/user/address?city=chennai',  { headers: this.getHeaders()})
        .pipe(map((data: Datas) => {
            return data;
        }
        ));
    }

    getPostman(): Observable<Datas> {
        return this.httpClient.post<Datas>('http://localhost:3000/users', {'city': 'ArunChennai'}, {headers: this.getHeaders()})
        .pipe(map((data:Datas) => {
            return data;
        }));
    }
}
