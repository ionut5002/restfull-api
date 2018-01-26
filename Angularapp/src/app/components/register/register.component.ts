import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 name: String;
 password: String;
 email: String;
 username: String;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    this.authService.registerUser(user).subscribe(message  => {
      if(user) {
        console.log('You are now registered and can now login');
        this.router.navigate(['/login']);
      } else {
        console.log('Something went wrong');
        this.router.navigate(['/register']);
      }
    });
  }

}
