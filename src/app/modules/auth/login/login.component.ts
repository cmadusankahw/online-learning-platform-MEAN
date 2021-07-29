import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { User, LogIn } from '../auth.model';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from 'src/app/error/error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // show alert on login failed
  showAlert = false;

  // recieving user list to check
  recievedUsers: User;

  constructor(private http: HttpClient,
              public authService: AuthService,
              public dialog: MatDialog) { }

  ngOnInit() {
    // login form validation
    this.loginForm = new FormGroup({
      cardId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });

  }

  // get form elements
  get cardId() { return this.loginForm.get('cardId'); }
  get password() { return this.loginForm.get('password'); }


  loginUser(loginform) {
    if (this.loginForm.invalid) {
      console.log('form invalid');
      this.dialog.open(ErrorComponent, {data: {message: 'Incorrect Card ID or Password'}});
    } else {
      this.showAlert = false;
      const login: LogIn = {
        cardId: loginform.value.cardId,
        password: loginform.value.password
      };
      this.authService.signIn(login);
    }
  }



}
