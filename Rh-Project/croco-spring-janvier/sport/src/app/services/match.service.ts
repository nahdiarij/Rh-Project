import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
 matchUrl: string = "http://localhost:8080/api/matches" ;
  constructor(private httpClient: HttpClient) { }
  // Response (match object with id)
  addMatch(match: any) {
   return this.httpClient.post(this.matchUrl + "/add", match) ;
  }
  // response : array of objects
  getAllMatches(){
    return this.httpClient.get(this.matchUrl);
  }
  //response: match object
  getMatchById(id){
    return this.httpClient.get(this.matchUrl + "/" + id);
    //return this.httpClient.get('${this.matchUrl}/${id}');
    
  }
  //Response : match object
  updateMatch(newMatch: any){
    return this.httpClient.put(`${this.matchUrl}/${newMatch.id}`, newMatch);
  }
  //Response : boolean
  deleteMatch(id: any){
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }
  // search by scoreone and scoretwo
  searchMatch(match){
    return this.httpClient.post(this.matchUrl, match);

  }


}
