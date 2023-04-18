import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matchesTab = [];
  constructor(private matchService: MatchService,
    private router: Router) { }

  ngOnInit() {
    this.matchesTab = JSON.parse(localStorage.getItem("matches") || '[]')
    // this.matchService.getAllMatches().subscribe();


  }
  deleteMatch(id) {
    this.matchService.deleteMatch(id).subscribe();
  }
  goToDisplay(id) {
    this.router.navigate([`matchInfo/${id}`]);

  }
  goToEdit(id) {
    this.router.navigate([`matchInfo/${id}`]);

  }


}
