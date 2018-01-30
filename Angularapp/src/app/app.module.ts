import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'ngx-flash-messages';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';




import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AuthService} from '../app/services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { VideosFilterPipe } from './pipes/video-filter.pipe';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    VideosFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),


  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
