import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, MatButtonModule, MatRadioModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

get nick(){
  return this.formUser.get('nick') as FormControl;
}

get password(){
  return this.formUser.get('password') as FormControl;
}

get email(){
  return this.formUser.get('email') as FormControl;
}

get gender(){
  return this.formUser.get('gender') as FormControl;
}

get description(){
  return this.formUser.get('description') as FormControl;
}

formUser = new FormGroup({
  'nick' : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=\D*\d).*$/)]),
  'email' : new FormControl('', [Validators.required, Validators.email]),
  'gender' : new FormControl('', Validators.required),
  'description' : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(100)])
});

  
// nick = new FormControl('', Validators.required);
// password = new FormControl('', Validators.required);
// email = new FormControl('', [Validators.required, Validators.email]);
// gender = new FormControl('', Validators.required);
// description = new FormControl('', Validators.required);

send(){
  console.log(this.formUser.value);
}


}
