import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Teams {

  constructor(HttpClient) {
    this.http = HttpClient;
  }

  activate() {
    return this.getTeams();
  }

  getTeams() {
    this.http.fetch('teams')
      .then(response => response.json())
      .then(data => {
        this.teams = data;
      })
      .catch(error => {
        alert('Error fetching teams!');
      });
  }

  createTeam(name) {
    var team = {
      name: name
    };

    this.http
      .fetch('teams', {
        method: 'post',
        body: json(team)
      })
      .then(response => response.json())
      .then(teams => {
        this.teams = teams;
      })
      .catch(error => {
        alert('Error creating team!');
      })

    this.newTeam = '';
  }

  deleteTeam(id) {
    this.http
      .fetch(`teams/${id}`, {
        method: 'delete',
      })
      .then(response => response.json())
      .then(teams => {
        this.teams = teams;
      })
      .catch(error => {
        alert('Error deleting team!');
      })

  }
}
