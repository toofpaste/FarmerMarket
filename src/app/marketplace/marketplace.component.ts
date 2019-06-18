import { Component, OnInit } from '@angular/core';
import { Farmer } from './../farmer/farmer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  farmers: Farmer[] = [
    new Farmer("Old McDonald", "French Fries", "So good, you'll come back for more", 1),
    new Farmer("Old McGreggor", "Little Bunny Foofoo", "Finally caught that damn rabbit in my cabbage patch", 2),
    new Farmer("Johnny Beanground", "Coffee Espresso Shots", "Artisnally crafted in a press en français", 3),
    new Farmer("Arthur Hoggett", "Pork", "Very tender suckling pig", 4)
  ];
  
  constructor(private router: Router){}

  ngOnInit() {
  }

  goToDetailPage(clickedFarmer: Farmer) {
    this.router.navigate(['farmers', clickedFarmer.id]);
  };
}
