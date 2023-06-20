import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  Token = "";
  email = ""

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(email: string, password: string) {
    return this.http.post<{ Token: string }>('http://localhost:8000/login', { "email": email, "password": password }, this.httpOptions)
  }

  signup(email: string, password: string){
    this.http.post<{ Token: string }>('http://localhost:8000/users', { "email": email, "password": password }, this.httpOptions)
      .subscribe((responseData) => {
        this.Token = responseData.Token;
        console.log(responseData.Token);
      });
  }
  
  getHelloWorld() {
    return this.http.get('http://localhost:8000/');
  }

  logout(){
    let httpParams = new HttpParams().set("email", this.email);
    this.http.delete('http://localhost:8000/sessions', {params: httpParams})
  }
}
