import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:Object;
  data:any=[];
  private apiurl = 'http://localhost:3000/videos'
  
  constructor(private router:Router,
    private http: Http  ) {
      this.getVideos();
      this.getData();
     }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.user = user[0];
    
    
    
  }
  getData(){
    return this.http.get(this.apiurl)
    .map((res:Response) => res.json())
  }
getVideos(){
  this.getData().subscribe(data =>{
    console.log(data);
    this.data = data;
  })
}
}
//| videosFilter: '_id': '5a648be224572c310c760431'