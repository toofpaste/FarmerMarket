import { Component, OnInit } from '@angular/core';
import { Farmer } from './../farmer/farmer.model';
import { Router } from '@angular/router';
import { FarmerService } from './../farmer.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [FarmerService]
})
export class MarketplaceComponent implements OnInit {
  farmers: Farmer[];
  constructor(private router: Router, private farmerService: FarmerService){}

  ngOnInit() {
    this.farmers = this.farmerService.getFarmers();
  }

  goToDetailPage(clickedFarmer: Farmer) {
    this.router.navigate(['farmers', clickedFarmer.id]);
  };
}
