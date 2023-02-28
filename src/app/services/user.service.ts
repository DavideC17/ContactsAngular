import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { NgForm } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:8080/user"

  constructor(private http: HttpClient ) { }

  getUsers() {
    return this.http.get(`${this.url}/readAll`)
  }

  getUser(id: number) {
    return this.http.get(`${this.url}/readUser/${id}`)
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`)
  }

  addUser(form: NgForm) {
    return this.http.put(`${this.url}/add`, form)
  }





}
