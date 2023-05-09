import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
//import { UserLogin } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'fs-login-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  newUserLogin = this.resetUserLogin();
  saved=false;

  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
    //private readonly userService: userService,
  ) {

  }

   canDeactivate() {
    return this.saved || this.loginForm.pristine || confirm("Do you really want to leave?. Changes will be lost");
  }

  resetUserLogin() {
    return {
      email: '',
      password: '',
      lat: 0,
      lng: 0,
    };
  }
  ngOnInit(): void {
    console.log(this.newUserLogin);
    navigator.geolocation.getCurrentPosition(pos => {
      this.newUserLogin.lat = pos.coords.latitude;
      this.newUserLogin.lng = pos.coords.longitude;
    });
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }

  addUserLogin() {

    /*this.authService.postLogin(this.newUserLogin).subscribe({
      next: (r) => {
        console.log(this.newUserLogin);
        this.saved = true;
        localStorage.setItem("token",r.accessToken)
        this.router.navigate(['/reviews']);
      },
      error: (error) => console.error("error:" + error),
    })*/
  }
}
