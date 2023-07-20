import { Component, OnInit } from '@angular/core';
import { student } from '../models/movie';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  name : string = 'Student Information';
  people:student[] = [
   {name: 'Rohit', address: 'Pune', phone: '9085843217', subject: 'Mathematic'},
   {name: 'Shivani', address: 'Sangli',phone: '9185749625', subject: 'English'},
   {name: 'Raddhika', address: 'karad', phone: '8579462837', subject: 'Chemistry'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
