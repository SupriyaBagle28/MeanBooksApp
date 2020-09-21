import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  //  BASE_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<any>{
    
    // return this.http.get(this.BASE_URL + '/books');
      return this.http.get( '/books');
  }

  getBooksByGenre(genre): Observable<any> {
    // return this.http.get(this.BASE_URL + '/books/' + genre)
     return this.http.get( '/books/' + genre)
  }

  
}

