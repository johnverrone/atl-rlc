import {inject} from 'aurelia-framework';
import {GamesService} from './games.service';

@inject(GamesService)
export class Games {
    
  constructor(GamesService) {
    this.weeks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    this.gamesService = GamesService;
  }

  activate() {
    this.getGames();
  }

  getGames() {
    this.gamesService.getGames()
      .then(data => this.games = data)
      .catch(error => console.log('Error fetching games!'));
  }
}