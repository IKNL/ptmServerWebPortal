import { Task } from './task';
import { Injectable } from '@angular/core';
import { TASKS } from './dummy-tasks';
import { Observable, of } from '../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private taskUrl = 'http://localhost:5000/api/task';
  private loginUrl = 'http://localhost:5000/api/token';

  constructor(
    private http: HttpClient
  ) { }

  /* temp */
  login(username, password): Observable<User> {
    return this.http.post<User>(this.loginUrl, {
      'username': username,
      'password': password
    });
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl).pipe(
      tap(_ => console.log('fetched tasks!')),
      catchError(this.handleError<Task[]>('getTasks'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


