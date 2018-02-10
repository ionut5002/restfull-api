import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

@Injectable()
export class PlaylistService {private apiurl = 'http://localhost:3000/playlist';
user:Object;
playlist:any=[];
constructor(private http: Http) { }

getAllPlaylists(){
  return this.http.get(this.apiurl)
  .map((res:Response) => res.json())
}



}