import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;

  user: User = new User();

  registerFlag: boolean = false;

  infoMessage: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.user).subscribe(() => {
        this.authService.createStorageItems(this.user);
        this.router.navigate(['/main']);
      },
      (error) => {
        this.errorMessage = 'Неправильный логин или пароль';
        this.infoMessage = '';
        console.error(error);
      }
    )
  }

  register() {
    this.authService.register(this.user).subscribe(() => {
        this.infoMessage = 'Пользователь зарегистрирован';
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Пользователь с таким именем уже существует';
        this.infoMessage = '';
        console.error(error);
      })
  }

  sendForm() {
    if (this.registerFlag) this.register();
    else this.login();
    this.registerFlag = false;
  }
}
