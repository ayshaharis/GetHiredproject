import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carpentry',
  templateUrl: './carpentry.component.html',
  styleUrls: ['./carpentry.component.css']
})
export class CarpentryComponent implements OnInit {
 httpdata:any;
  constructor(public http:HttpClient) { }


  ngOnInit(): void {
    this.http.get("http://localhost:3000/api/services/carpenter")
    .subscribe((Cservices)=>{
      this.httpdata=Cservices;
      console.log(this.httpdata);
    })
  }

}
