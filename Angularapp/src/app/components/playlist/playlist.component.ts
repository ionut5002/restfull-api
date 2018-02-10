import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {VideosService} from '../../services/videos.service';
import {PlaylistService} from '../../services/playlist.service';
 
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  user:Object;
  data:any=[];
  playlist:any=[];

  constructor(private router:Router,
    private http: Http,
    private videosService: VideosService,
    private playlistService: PlaylistService) { }

  ngOnInit() {
    this.getVideos();
    this.getPlaylists();
    this.playlistService.getAllPlaylists();
      this.videosService.getAllVideos();
      this.getUserData();
  }

  getVideos(){
    this.videosService.getAllVideos().subscribe(data =>{
      this.data = data;
      console.log(data);
    })
  }
  getPlaylists(){
    this.playlistService.getAllPlaylists().subscribe(playlist =>{
      this.playlist = playlist;
      console.log(playlist);
    })
  }
  getUserData(){
    const user = JSON.parse(localStorage.getItem('user'));
      this.user = user[0];
  }

}
