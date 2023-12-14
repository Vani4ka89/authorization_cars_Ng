import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IAuth, ITokens} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly accessTokenKey = 'access';
  private readonly refreshTokenKey = 'refresh';
  private authUserSubject = new BehaviorSubject<IAuth>(null);

  constructor(private httpClient: HttpClient) {
  }

  login(user: IAuth): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.auth.login, user).pipe(
      tap(tokens => {
        this._setTokens(tokens)
      })
    )
  }

  register(user: IAuth): Observable<void> {
    return this.httpClient.post<void>(urls.auth.register, user)
  }

  refresh(): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.auth.refresh, this.getRefreshToken()).pipe(
      tap(tokens => {
        this._setTokens(tokens)
      })
    )
  }

  me(): Observable<IAuth> {
    return this.httpClient.get<IAuth>(urls.auth.me).pipe(
      tap(user => {
        this.authUserSubject.next(user)
      })
    )
  }

  getAuthUser(): Observable<IAuth> {
    return this.authUserSubject.asObservable()
  }

  setAuthUser(user: IAuth): void {
    this.authUserSubject.next(user)
  }

  private _setTokens({access, refresh}: ITokens): void {
    localStorage.setItem(this.accessTokenKey, access);
    localStorage.setItem(this.refreshTokenKey, refresh);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey);
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey);
  }

}
