import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { SalonSpaceService } from '../salon-space.service';
import ITechnicianModelAngular from '../share/ITechnicianModelAngular';

@Component({
  selector: 'app-technician-details',
  templateUrl: './technician-details.component.html',
  styleUrls: ['./technician-details.component.less']
})
export class TechnicianDetailsComponent implements OnInit {
  technicianID: number;
  sub: any;
  result: any;
  ratings: any;
  salons: any;
  counter(i: number) {
    return new Array(i);
  }
  constructor(
    private route: ActivatedRoute,
    salon$: SalonSpaceService
  ) {
    this.technicianID = route.snapshot.params['technicianID'];
    salon$.getTechnicianDetails(this.technicianID).subscribe(
      data => {
        this.result = data;
        console.log('technician data: ', data);
      }
    );
    salon$.getTechnicianRatings(this.technicianID).subscribe(
      data => {
        this.ratings = data;
        console.log('ratings data:: ', data);
      }
    );
    salon$.getTechnicianSalons(this.technicianID).subscribe(
      data => {
        this.salons = data;
        console.log('salons data:: ', data);
      }
    );
  }
   
  ngOnInit() {
  }

}