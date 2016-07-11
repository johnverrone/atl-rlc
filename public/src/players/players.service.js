import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class PlayersService {

  constructor(HttpClient) {
    this.http = HttpClient;
  }

  getPlayers() {
    return this.http.fetch('players').then(response => response.json())
  }

  createPlayer(newPlayer) {
    return this.http
      .fetch('players', {
        method: 'post',
        body: json(newPlayer)
      })
      .then(response => response.json());
  }

  deletePlayer(id) {
    return this.http
    .fetch(`players/${id}`, {
      method: 'delete',
    })
    .then(response => response.json());
  }
}
