import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { SignupComponent } from './components/signup/signup.component';



const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "subscription", component: SignupComponent},
  {path: "login", component: LoginComponent},
  {path: "matches", component: MatchesComponent},
  {path: "players", component: PlayersComponent},
  {path: "addMatch", component: AddMatchComponent},
  {path: "addPlayer", component: AddPlayerComponent},
  {path: "addTeam", component: AddTeamComponent},
  {path: "admin", component: AdminComponent},
  //(id is a param)
  {path: "matchInfo/:id", component: MatchInfoComponent},
  {path: "editMatch/:id", component: EditMatchComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
