import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
 data : string = 'Angular Batch 7'

 getDataFromchild(value){
  console.log(value);
 }


}

