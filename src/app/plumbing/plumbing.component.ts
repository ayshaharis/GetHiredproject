import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plumbing',
  templateUrl: './plumbing.component.html',
  styleUrls: ['./plumbing.component.css']
})
export class PlumbingComponent implements OnInit {
  httpdata:any;
  constructor(public http:HttpClient) { }
  
  ngOnInit(): void {
    this.http.get("http://localhost:3000/api/services/plumbing")
    .subscribe((Pservices)=>{
      this.httpdata=Pservices;
      console.log(this.httpdata);
    })
  }

}
