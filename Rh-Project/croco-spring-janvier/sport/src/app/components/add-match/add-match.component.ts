import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
match:any= {};
matchForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  addMatch() { 
   
    let T= JSON.parse(localStorage.getItem("matches") || "[]")
    let matchId= JSON.parse(localStorage.getItem("matchId") || "1")
    this.match.id=matchId
     T.push(this.match)
    localStorage.setItem("matches",JSON.stringify(T))
    localStorage.setItem("matchId",JSON.stringify(matchId + 1))
  }

}
