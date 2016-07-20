import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class GamesService {

  constructor(HttpClient) {
    this.http = HttpClient;
  }

  getGames() {
    return this.http.fetch('games').then(response => response.json());
  }
}
