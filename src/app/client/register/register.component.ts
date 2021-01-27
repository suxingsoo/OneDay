import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact_number: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]{12}")
    ]),
    email_address: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])

  });

  constructor(private router: Router) { }
  get firstname() {
    return this.form.get('firstname')
  }
  get lastname(){
    return this.form.get('lastname')
  }
  get address(){
    return this.form.get('address')
  }
  get contact_number(){
    return this.form.get('contact_number')
  }
  get email_address(){
    return this.form.get('email_address')
  }
  get password(){
    return this.form.get('password')
  }

  ngOnInit(): void {
    
  }

  loading = false
  submit = false

  onSubmit() {
    document.getElementById('spinner').style.display = "block";
    axios.post("https://btal-ride.herokuapp.com/api/client/register", this.form.value).then(res=>{
    document.getElementById('spinner').style.display = "none";
       this.router.navigate(['userhome']);
        }).catch(err=>{
            console.log(err)
        })
  }
}
