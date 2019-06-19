import { Injectable } from '@angular/core';
import { Farmer } from './farmer/farmer.model';
import { FARMERS } from './farmer/mock-farmers';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FarmerService {
  farmers: FirebaseListObservable<any[]>;
  farmerId: number;
  farmerToDisplay: Farmer;
  
  constructor(private database: AngularFireDatabase) {
    this.farmers = database.list('farmers');
   }

  getFarmers() {
    return this.farmers;
  }

  getFarmerById(farmerId: number){
    for (var i = 0; i <= FARMERS.length - 1; i++) {
      if (FARMERS[i].id === farmerId) {
        return FARMERS[i];
      }
    }
  }
}
