import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {VideosService} from '../../services/videos.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  user:Object;
  data:any=[];

  constructor(private router:Router,
    private http: Http,
    private videosService: VideosService) { }

  ngOnInit() {
    this.getVideos();
      this.videosService.getAllVideos();
      this.getUserData();
  }

  getVideos(){
    this.videosService.getAllVideos().subscribe(data =>{
      this.data = data;
    })
  }
  getUserData(){
    const user = JSON.parse(localStorage.getItem('user'));
      this.user = user[0];
  }
}
