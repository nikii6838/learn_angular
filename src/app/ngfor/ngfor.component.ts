import { Component, OnInit } from '@angular/core';
import { Movies } from '../models/movie';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  title : string = 'Top 3 Tollywood Movies';
  movies: Movies[] = [
   {title: 'Kantara', director: 'Rishbh Setty', cast: 'Rishabh Setty', releaseDate: '2022'},
   {title: 'SHivaji the boss', director: 'S.Shankar', cast: 'Rajnikanth', releaseDate: '2010'},
   {title: 'Bahubali', director: 'Rajmoli', cast: 'Prabhash', releaseDate: '2015'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
