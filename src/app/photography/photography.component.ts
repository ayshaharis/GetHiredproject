import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
  httpdata :any;
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/api/services/photography")
    .subscribe((Phservices)=>{
      this.httpdata=Phservices;
      console.log(this.httpdata);
    })
  }

}
