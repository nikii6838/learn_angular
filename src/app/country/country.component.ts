import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  selectedCountry: string;
  constructor() { }

  ngOnInit() { }
  getProductValue(product)
  {
    this.selectedCountry = product.target.value;
    console.log('ngswitch', product.target.value);
  }
}