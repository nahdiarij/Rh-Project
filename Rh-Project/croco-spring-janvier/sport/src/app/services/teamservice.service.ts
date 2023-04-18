import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamserviceService {

  teamUrl: string = "http://localhost:8080/api/player" ;
  constructor(private httpClient: HttpClient) { }
  // Response (match object with id)
  addTeam(team: any) {
   return this.httpClient.post(this.teamUrl + "/add", team) ;
  }
  // response : array of objects
  getAllTeam(){
    return this.httpClient.get(this.teamUrl);
  }
  //response: match object
  getTeamById(id){
    return this.httpClient.get(this.teamUrl + "/" + id);
    //return this.httpClient.get('${this.matchUrl}/${id}');
    
  }
  //Response : match object
  updateTeam(newTeam: any){
    return this.httpClient.put(`${this.teamUrl}/${newTeam.id}`, newTeam);
  }
  //Response : boolean
  deleteTeam(id: any){
    return this.httpClient.delete(`${this.teamUrl}/${id}`);
  }
  // search by scoreone and scoretwo
  searchTeam(team){
    return this.httpClient.post(this.teamUrl, team);

  }
}
