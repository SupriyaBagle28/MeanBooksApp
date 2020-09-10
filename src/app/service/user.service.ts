import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {IRegisteredUsers} from '../files/RegisteredUsers';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

isUserLoggedin:boolean;

  constructor(private http: HttpClient) { }

getUsers(): Observable<any>{
  return this.http.get('http://localhost:3000/api/users')
}

addUser(data): Observable<any>{
  var headers = {
    'content-type': 'application/json'
  }
  console.log(data,"in service"); 
  return this.http.post("http://localhost:3000/api/user", data,{headers: new HttpHeaders(headers)})
}


logout() :void {    
   localStorage.setItem('isLoggedIn','false');    
   localStorage.removeItem('token');
  
   localStorage.removeItem('item');    
   }  
}
