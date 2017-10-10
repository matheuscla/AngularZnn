import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { API } from '../../app.api.definitions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SurvivorsService {
  public people;
  constructor(private http: Http) {
  }

  getPeople() {
    return this.http.get(`${API.domain}/api/people.json`)
      .map((response: Response) => {
        this.people = response.json();
        return this.people;
      });
  }

  createSurvivor(survivor) {
    return this.http.post(`${API.domain}/api/people.json`, survivor)
      .map((res: Response) => res.headers);
  }

  getPerson(location) {
    return this.http.get(location)
      .map((response: Response) => response.json());
  }

  getItems(url) {
    return this.http.get(`${url}/properties.json`)
      .map((response: Response) => response.json());
  }

  getInventoryById(id) {
    return this.http.get(`${API.domain}/api/people/${id}/properties.json`)
      .map(res => res.json())
      .toPromise();
  }

  getPersonById(id) {
    return this.http.get(`${API.domain}/api/people/${id}`)
      .map(res => res.json())
      .toPromise();
  }
}
