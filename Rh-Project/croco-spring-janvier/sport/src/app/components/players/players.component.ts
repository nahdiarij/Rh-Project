import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersTab = [
    {id:1 , name:"salah", age:25, position:"attaquant" },
    {id:2 , name:"salah", age:25, position:"attaquant" },
    {id:3 , name:"salah", age:25, position:"attaquant" },
    {id:4 , name:"salah", age:25, position:"attaquant" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
