import {inject} from 'aurelia-framework';
import {json} from 'aurelia-fetch-client';
import {TeamsService} from '../teams/teams.service';
import {PlayersService} from './players.service';

@inject(TeamsService, PlayersService)
export class Players {

  constructor(TeamsService, PlayersService) {
    this.teamsService = TeamsService;
    this.playersService = PlayersService;
  }

  activate() {
    this.teamsService.getTeams()
      .then(data => this.teams = data)
      .catch(error => console.log('Error fetching teams.'));
    this.getPlayers();
  }

  openDialog() {
    this.createPlayerDialog.showModal();
  }

  closeDialog() {
    this.createPlayerForm.reset();
    this.createPlayerDialog.close();
  }

  createPlayer() {
    var newPlayer = {
      username: this.username,
      team_id: this.selectedTeam,
      first_name: this.first_name,
      last_name: this.last_name,
      email_address: this.email_address
    }

    this.playersService.createPlayer(newPlayer)
      .then(data => {
        this.players = data;
        this.selectedTeam = null;
      })
      .catch(error => console.log('Error fetching players!'));

    this.closeDialog();
  }

  getPlayers() {
    this.playersService.getPlayers()
      .then(data => this.players = data)
      .catch(error => console.log('Error fetching players!'));
  }
}
