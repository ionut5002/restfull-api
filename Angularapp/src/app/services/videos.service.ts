import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

@Injectable()
export class VideosService {
  private apiurl = 'http://localhost:3000/videos';
  user:Object;
  data:any=[];
  constructor(private http: Http) { }
 
  getAllVideos(){
    return this.http.get(this.apiurl)
    .map((res:Response) => res.json())
  }
  
  
  
}
