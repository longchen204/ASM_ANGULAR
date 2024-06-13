import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TUser } from '../../../interface/user';
import { UserService } from '../../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService) {}
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  router = new Router();
  onLog = () => {
    this.userService.Login(this.loginform.value as TUser).subscribe(
      (data) => {
        alert('Đăng nhập thành công');
        this.router.navigate(['/admin']);
      },
      (error) => {
        console.log(error.error);

        alert('Có lỗi sảy ra');
      }
    );
  };
}
