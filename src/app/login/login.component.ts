import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      'name': "",
      'password': "",
    })
  }

  ngOnInit() {
  }

  onSubmit(formData: any){
    console.log(formData);
    console.log("logged in as: ", formData)
  }

}
