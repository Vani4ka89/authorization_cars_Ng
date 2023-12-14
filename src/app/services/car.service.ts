import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICar} from "../interfaces";
import {urls} from "../constants";
import {IPagination} from "../interfaces/pagination.interface";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPagination<ICar>> {
    return this.httpClient.get<IPagination<ICar>>(urls.cars.base)
  }
}
