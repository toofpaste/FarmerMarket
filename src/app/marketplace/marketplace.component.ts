import { Component, OnInit } from '@angular/core';
import { Farmer } from './../farmer/farmer.model';
import { Router } from '@angular/router';
import { FarmerService } from './../farmer.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [FarmerService]
})
export class MarketplaceComponent implements OnInit {
  farmers: FirebaseListObservable<any[]>;

  constructor(private router: Router, private farmerService: FarmerService){}

  ngOnInit() {
    this.farmers = this.farmerService.getFarmers();
  }

  goToDetailPage(clickedFarmer: Farmer) {
    this.router.navigate(['farmers', clickedFarmer.id]);
  };
}
