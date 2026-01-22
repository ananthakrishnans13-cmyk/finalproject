import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  books:any[]=[];
  constructor(private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
  ngOnInit(){
    this.apiservice.getBooks().subscribe((data:any)=>{
      this.books=data.results;
      this.cdr.detectChanges();
    });
  }

}
