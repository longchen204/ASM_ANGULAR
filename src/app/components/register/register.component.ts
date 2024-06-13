import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUser } from '../../../interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private userService: UserService) {}
  registerform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  router = new Router();
  onRes = () => {
    this.userService.Register(this.registerform.value as TUser).subscribe(
      (data) => {
        this.registerform;
        alert('thêm thành công');
        this.router.navigate(['login']);
      },
      (error) => {
        alert(error.error);
      }
    );
  };
}
