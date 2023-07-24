import { Component, OnInit } from '@angular/core';
import { Movies } from '../models/movie';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  // title : string = 'Top 3 Tollywood Movies';
  // movies: Movies[] = [
  //  {title: 'Kantara', director: 'Rishbh Setty', cast: 'Rishabh Setty', releaseDate: '2022'},
  //  {title: 'SHivaji the boss', director: 'S.Shankar', cast: 'Rajnikanth', releaseDate: '2010'},
  //  {title: 'Bahubali', director: 'Rajmoli', cast: 'Prabhash', releaseDate: '2015'}
  // ]
  countries: string[] = ['USA', 'Canada', 'India', 'Australia'];
  states: { [key: string]: string[] } = {
    USA: ['New York', 'California', 'Texas'],
    Canada: ['Ontario', 'Quebec', 'Alberta'],
    India: ['Delhi', 'Mumbai', 'Bangalore'],
    Australia: ['Sydney', 'Melbourne', 'Brisbane']
  };
  
  selectedCountry: string;
  selectedState: string;

  onCountryChange(country: string) {
    this.selectedCountry = country;
    this.updateStates();
  }
  updateStates() {
    if (this.selectedCountry) {
      this.selectedState = null; 
    }
  }

  ngOnInit() {
  }

}
