import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerserviceService } from 'src/app/services/playerservice.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  playersTab: any;

  constructor(private PlayerService:PlayerserviceService,
    private router: Router) { }

  ngOnInit() {
    this.playersTab = JSON.parse(localStorage.getItem("player") || '[]')
    this.PlayerService.getAllPlayers().subscribe();
  }

  deleteMatch(id) {
    this.PlayerService.deletePlayer(id).subscribe();
  }
  goToDisplay(id) {
    this.router.navigate([`playerInfo/${id}`]);

  }
  goToEdit(id) {
    this.router.navigate([`playerInfo/${id}`]);

  }
}
