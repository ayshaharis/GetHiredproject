import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-electrical',
  templateUrl: './electrical.component.html',
  styleUrls: ['./electrical.component.css']
})
export class ElectricalComponent implements OnInit {
  // Added 'any' to avoid error of declaration of object httpdata.
  httpdata:any;
  constructor(public http:HttpClient) { }
  
  ngOnInit(): void {
    
    this.http.get("http://localhost:3000/api/services/electrical")
    .subscribe((Eservices)=>{
      this.httpdata=Eservices;
      // console.log(Eservices);
       console.log(this.httpdata);      
    })
  }

  knowMore(){
    this.http.get('http://localhost:3000/api/services/electrical/:id')
    .subscribe((singlewoker)=>{
      this.httpdata=singlewoker;
      console.log(this.http)
    });
  }

}
