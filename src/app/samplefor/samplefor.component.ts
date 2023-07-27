import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-samplefor',
  templateUrl: './samplefor.component.html',
  styleUrls: ['./samplefor.component.css']
})
export class SampleforComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
onSubmit(form : NgForm) {
  console.log(`form submitted`, form);

  let username = form.value.username;
  console.log(`Username is :`, username);

  let password = form.value.password;
  console.log(`Password is :`, password);

  let email = form.value.email;
  console.log(`email is :`, email);
  
  let country = form.value.address.country;
  console.log(`country is :`, country);
  
  let states = form.value.address.state;
  console.log(`states is :`, states);
  
}
}
