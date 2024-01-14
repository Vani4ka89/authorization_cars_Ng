import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";

import {ICar} from "../interfaces";
import {urls} from "../constants";
import {IPagination} from "../interfaces/pagination.interface";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private triggerSubject = new BehaviorSubject<boolean>(null)

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPagination<ICar>> {
    return this.httpClient.get<IPagination<ICar>>(urls.cars.base)
  }

  create(data: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars.base, data).pipe(
      tap(()=>{
        this.triggerSubject.next(!this.triggerSubject.value)
      })
    )
  }

  getTrigger(): Observable<boolean> {
    return this.triggerSubject.asObservable()
  }

  // setTrigger(): void {
  //   this.triggerSubject.next(!this.triggerSubject.value)
  // }
}
