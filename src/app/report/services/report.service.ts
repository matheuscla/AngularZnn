import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API } from '../../app.api.definitions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportService {

  constructor(private http: Http) { }

  getInfectedReport() {
    return this.http.get(`${API.domain}/api/report/infected.json`)
    .map((response) => response.json())
    .toPromise();
  }

  getSurvivorReport() {
    return this.http.get(`${API.domain}/api/report/non_infected.json`)
    .map((response) => response.json())
    .toPromise();
  }

  getInfectedPoints() {
    return this.http.get(`${API.domain}/api/report/infected_points.json`)
    .map((response) => response.json())
    .toPromise();
  }

  getPeopleInventory() {
    return this.http.get(`${API.domain}/api/report/people_inventory.json`)
    .map((response) => response.json())
    .toPromise();
  }
}
