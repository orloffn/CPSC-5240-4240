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
  // technicianObservable: Observable<ITechnicianModelAngular[]>;
  technicianID: number;
  sub: any;
  result: any;
  constructor(
    private route: ActivatedRoute,
    salon$: SalonSpaceService
  ) {
    this.technicianID = route.snapshot.params['technicianID'];
    // this.technicianObservable=salon$.getTechnicianDetails(this.technicianID);
    salon$.getTechnicianDetails(this.technicianID).subscribe(
      data => {
        this.result = data;
        console.log(data);
      } 
    );
  }
   
  ngOnInit() {
  }

}




// export class ListComponent implements OnInit {
//   listId: string;
//   listItems: Item; // ITaskModelAngular[];
//   name: string;

//   constructor(
//     private route: ActivatedRoute,
//     private location: Location,
//     private list$: ListsService
//   ) { 
//     this.listId = route.snapshot.params['id'];
//     list$.getItems(this.listId)
//     .subscribe(
//       result => {
//         this.listItems = result.tasks;
//         this.name = result.name;
//       },
//       () => {},
//       () => {}
//     );
//   }

//   ngOnInit():void {}

// }