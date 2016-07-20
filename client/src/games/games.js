import {inject} from 'aurelia-framework';
import {GamesService} from './games.service';
import _ from 'lodash';

@inject(GamesService)
export class Games {
    
  constructor(GamesService) {
    this.gamesService = GamesService;
  }

  activate() {
    this.getGames();
  }

  getGames() {
    this.gamesService.getGames()
      .then(data => {
        this.gamesByWeek =_.values(_.groupBy(data, 'week_nbr'));
      })
      .catch(error => console.log('Error fetching games!'));
  }
}