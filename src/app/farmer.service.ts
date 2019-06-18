import { Injectable } from '@angular/core';
import { Farmer } from './farmer/farmer.model';
import { FARMERS } from './farmer/mock-farmers';

@Injectable()
export class FarmerService {
  farmerId: number;
  farmerToDisplay: Farmer;

  constructor() { }

  getFarmers() {
    return FARMERS;
  }

  getFarmerById(farmerId: number){
    for (var i = 0; i <= FARMERS.length - 1; i++) {
      if (FARMERS[i].id === farmerId) {
        return FARMERS[i];
      }
    }
  }
}
