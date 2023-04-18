import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamserviceService } from 'src/app/services/teamservice.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

    teamTab: any;
  
    constructor(private TeamService:TeamserviceService,
      private router: Router) { }
  
    ngOnInit() {
      this.teamTab = JSON.parse(localStorage.getItem("team") || '[]')
      this.TeamService.getAllTeam().subscribe();
    }
  
    deleteMatch(id) {
      this.TeamService.deleteTeam(id).subscribe();
    }
    goToDisplay(id) {
      this.router.navigate([`teamInfo/${id}`]);
  
    }
    goToEdit(id) {
      this.router.navigate([`teamInfo/${id}`]);
  
    }
  }
  


