import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private apiUri = "https://ffxivcollect.com/api/mounts";
  constructor(private http: HttpClient) { }

  getMountList(){
    return this.http.get(this.apiUri);
  }

  getMountDetails(index: number){
    return this.http.get(`${this.apiUri}/${index}`);
  }

}
