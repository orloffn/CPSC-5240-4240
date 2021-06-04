import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ITechnicianModelAngular from './share/ITechnicianModelAngular';
import { Observable } from 'rxjs';
import IRatingModelAngular from './share/IRatingModelAngular';

@Injectable()
export class SalonSpaceService {
 // hostUrl:string = 'http://localhost:8080/';
 hostUrl:string = 'https://salonspace.azurewebsites.net/';
 //hostUrl:string= '/';
 

 
  constructor(private httpClient: HttpClient) { }

  getTechnicianLists() {
    return this.httpClient.get<ITechnicianModelAngular[]>( this.hostUrl + 'app/technician');// + 'json/lists.json'
  }
  getTechnicianDetails(technicianID: number) {
    return this.httpClient.get<ITechnicianModelAngular[]>( this.hostUrl + 'app/technician/' + technicianID);// + 'json/lists.json'
  }
  getTechnicianRatings(technicianID: number) {
    return this.httpClient.get<ITechnicianModelAngular[]>( this.hostUrl + 'app/technician-rating/' + technicianID);
  }
  getTechnicianSalons(technicianID: number) {
    return this.httpClient.get<ITechnicianModelAngular[]>( this.hostUrl + 'app/technician-salon/' + technicianID);
  }
  getRatings() : Observable<IRatingModelAngular[]> {
    return this.httpClient.get<IRatingModelAngular[]>(this.hostUrl + 'app/rating');
  }
}