import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {


  playerUrl: string = "http://localhost:8080/api/player" ;
  constructor(private httpClient: HttpClient) { }
  // Response (match object with id)
  addPlayer(player: any) {
   return this.httpClient.post(this.playerUrl + "/add", player) ;
  }
  // response : array of objects
  getAllPlayers(){
    return this.httpClient.get(this.playerUrl);
  }
  //response: match object
  getPlayerById(id){
    return this.httpClient.get(this.playerUrl + "/" + id);
    //return this.httpClient.get('${this.matchUrl}/${id}');
    
  }
  //Response : match object
  updatePlayer(newPlayer: any){
    return this.httpClient.put(`${this.playerUrl}/${newPlayer.id}`, newPlayer);
  }
  //Response : boolean
  deletePlayer(id: any){
    return this.httpClient.delete(`${this.playerUrl}/${id}`);
  }
  // search by scoreone and scoretwo
  searchPlayer(player){
    return this.httpClient.post(this.playerUrl, player);

  }
}
