import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
//import { User } from '../interfaces/user';
//import "../../../styles.css";
import { ConfirmedEmailDirective } from 'src/app/shared/validators/confirmed-email.directive';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'fs-register-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ConfirmedEmailDirective],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit{
  newUser = this.resetUser();
  saved=false;

  @ViewChild('registerForm') registerForm!: NgForm;
  emailModel !: NgModel;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
    //private readonly userService: userService,
  ) {

  }

  canDeactivate() {
    return this.saved || this.registerForm.pristine || confirm("Do you really want to leave?. Changes will be lost");
  }

  resetUser() {
    return {
      name: '',
      email: '',
      password: '',
      lat: 0,
      lng: 0,
      avatar: ''
    };
  }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition(pos => {
      this.newUser.lat = pos.coords.latitude;
      this.newUser.lng = pos.coords.longitude;
    });
  }
  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newUser.avatar = reader.result as string;
    });
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }

  addUser(){
    /*console.log(this.newUser);
    this.authService.post(this.newUser).subscribe({
      next: () => {
        this.saved = true;
        this.router.navigate(['/auth/login']);
      },
      error: (error) => console.error("error:" + error),
    })*/
  }

}
