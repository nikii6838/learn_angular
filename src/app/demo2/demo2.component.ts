import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  genders = [
    { id: '1', value: 'Male'},
    { id: '2', value: 'Female'},
    { id: '3', value: 'Other'},

  ]
  isFormSubmitted= false;
  defaultCourseValue = 'Select Course';
  formData = {
    username: '',
    email: '',
    course: '',
    country: '',
    state: '',
    gender:''
   }
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form : NgForm){
    console.log(`-----------------------------------------`);
    console.log(`Display Simple Form Input Values `);
    console.log(`-----------------------------------------`);
    
    console.log(`Form Submitted`, form);
    let username = form.value.username;
    console.log(`User Name is :`, username);
    let email = form.value.email;
    console.log(`User Email is :`, email);
    let password = form.value.password;
    console.log(`User Password is :`, password);
    let selectedCourse = form.value.course;
    console.log(`User Selected Course is :`, selectedCourse);

    console.log(`-----------------------------------------`);
    console.log(`Display Nested Form Input Values `);
    console.log(`-----------------------------------------`);
    let country = form.value.address.country;
    console.log('Country Name is : ', country)
    let country1 = form.value.address.state;
    console.log('State Name is : ', country1)
    console.log(`-----------------------------------------`);

    this.isFormSubmitted = true;
    this.formData.username = form.value.username;
    this.formData.email = form.value.email;
    this.formData.course = form.value.course;
    this.formData.country = form.value.address.country;
    this.formData.state = form.value.address.state;
    this.formData.gender = form.value.gender;
    

    // form.controls['course'].setValue('JavaScript');
    form.resetForm({
      course: this.defaultCourseValue
    });
  }
}