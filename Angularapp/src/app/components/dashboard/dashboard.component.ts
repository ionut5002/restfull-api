import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {VideosService} from '../../services/videos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  user:Object;
  
  
  
  constructor(
    private router:Router,
    private http: Http,
    private videosService: VideosService  ) {
      
      this.getUserData();
      
     
     }

  ngOnInit() {}
  
  getUserData(){
    const user = JSON.parse(localStorage.getItem('user'));
      this.user = user[0];
  }
  

}
