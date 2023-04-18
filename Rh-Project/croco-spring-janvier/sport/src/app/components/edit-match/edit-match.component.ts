import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  private router: Router ;
 matchForm: FormGroup;
 match: any = {};
 id: any ;

  constructor(private activatedRoute: ActivatedRoute,
    private matchService: MatchService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  
    this.matchService.getMatchById(this.id).subscribe();

   
  }
 editMatch() {
  alert("here edit btn");
  this.matchService.updateMatch(this.match).subscribe();
 }

}
