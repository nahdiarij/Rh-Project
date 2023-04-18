import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup ;
  loginForm:FormGroup;
  user: any = {};
  constructor(private formBuilder:FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email:  ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6),Validators.maxLength(5)]],

    })
  }
  login(){ 
    this.authService.login(this.user).subscribe();
  }

}
