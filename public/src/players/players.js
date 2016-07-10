import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Players {

  constructor(HttpClient) {
    this.http = HttpClient;
  }

  activate() {
    return this.getPlayers();
  }

  openDialog() {
    this.createPlayerDialog.showModal();
  }

  closeDialog() {
    this.createPlayerForm.reset();
    this.createPlayerDialog.close();
  }

  createPlayer() {
    this.closeDialog();
  }

  getPlayers() {
    this.http.fetch('players')
      .then(response => response.json())
      .then(data => {
        this.players = data;
      })
      .catch(error => {
        alert('Error fetching players!');
      });
  }
}
