import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class TeamsService {

  constructor(HttpClient) {
    this.http = HttpClient;
  }

  getTeams() {
    return this.http.fetch('teams').then(response => response.json());
  }

  createTeam(newTeam) {
    return this.http
      .fetch('teams', {
        method: 'post',
        body: json(newTeam)
      })
      .then(response => response.json());
  }

  deleteTeam(id) {
    return this.http
    .fetch(`teams/${id}`, {
      method: 'delete',
    })
    .then(response => response.json());
  }
}
