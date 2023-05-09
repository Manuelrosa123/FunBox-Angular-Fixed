import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'fs-edit-user-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.css']
})
export class EditUserPageComponent {

  @ViewChild('nameModified') nameModified!: NgForm;
  @ViewChild('passwdModified') passwdModified!: NgForm;

  name = '';
  email = '';
  passwd = '';
  passwd2 = '';

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {

  }
modifyPassword() {
  this.userService.passwdEdit(this.passwd).subscribe(()=>{
    this.router.navigate(['users/me']);
  });
}
modifyName() {
  this.userService.nameEdit(this.name,this.email).subscribe(()=>{
    this.router.navigate(['users/me']);
  });
}
modifyAvatar() {
  this.userService.avatarEdit((document.getElementById("photo") as HTMLImageElement).src).subscribe(()=>{
    this.router.navigate(['users/me']);
  });
}
changeImage(fileInput: HTMLInputElement) {
  if (!fileInput.files || fileInput.files.length === 0) {
    return;
  }
  const reader: FileReader = new FileReader();
  reader.readAsDataURL(fileInput.files[0]);
  reader.addEventListener('loadend', () => {
    (document.getElementById('photo') as HTMLInputElement).src = reader.result as string;
  });

  }
}
