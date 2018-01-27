import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:Object;
  constructor(private router:Router) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.user = user[0];
    
    
  }

}
