import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private rsSelectedUser = new BehaviorSubject<any>(null);
  selectedUser = this.rsSelectedUser.asObservable();

  constructor(private http:HttpClient) {

  }

  updateSelectedUser(user: any) {
    this.rsSelectedUser.next(user);
  }

  getAllUsers(page) :Observable<any>{
    if(page){
      return this.http.get<any>(
        `https://randomuser.me/api/?page=${page}&results=2`
      );
    } else {
      return this.http.get<any>(
        `https://randomuser.me/api/?results=2`
      );
    }


  }


  getMaleUsers(page):Observable<any>{
    if(page){
      return this.http.get<any>(
        `https://randomuser.me/api/?page=${page}&gender=male&results=2`
      );
    } else {
      return this.http.get<any>(
        `https://randomuser.me/api/?gender=male&results=2`
      );
    }

  }
  getFemaleUsers(page):Observable<any>{
    if(page){
      return this.http.get<any>(
        `https://randomuser.me/api/?page=${page}&gender=female&results=2`
      );
    } else {
      return this.http.get<any>(
        `https://randomuser.me/api/?gender=female&results=2`
      );
    }
  }
  downloadPage():Observable<any>{
    return this.http.get<any>(`https://randomuser.me/api/?results=5&inc=name,gender,nat&noinfo`)
  }
}
