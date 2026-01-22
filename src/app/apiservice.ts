import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  constructor(private http:HttpClient){}
  getBooks(){
    return this.http.get("https://gutendex.com/books");
  }
  
}
