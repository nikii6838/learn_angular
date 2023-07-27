import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Angular.com!'
  courses: string[] = 
  [
   'Angular', 
  'JavaScript',
  'HTML' ,
  'CSS'
 ];

 }




