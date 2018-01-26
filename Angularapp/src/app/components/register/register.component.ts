import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'ngx-flash-messages';
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

  constructor(private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
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
        this.flashMessagesService.show('User Registered!',{classes:['alert', 'alert-success']});
        this.router.navigate(['/login']);
      } else {
        this.flashMessagesService.show('Something is wrong!',{classes:['alert', 'alert-danger']});
        this.router.navigate(['/register']);
      }
    });
  }

}
