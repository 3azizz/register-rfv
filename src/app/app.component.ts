import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'RfV-Project';

  myForm!: FormGroup;

constructor(){}


ngOnInit(): void {
  
  this.myForm = new FormGroup({
    fullName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    UserName: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required]),
    phoneNumber: new FormControl('',[Validators.required]),
    passWord: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
    gender: new FormControl ('3')

  })
}

onSubmit(){

  console.log(this.myForm.value);
  
}

get fullName(){
  return this.myForm.get('fullName')
}

get UserName(){
  return this.myForm.get('UserName')
}

get Email(){
  return this.myForm.get('Email')
}

get phoneNumber(){
  return this.myForm.get('phoneNumber')
}

get passWord(){
  return this.myForm.get('passWord')
}

get confirmPassword(){
  return this.myForm.get('confirmPassword')
}




}
