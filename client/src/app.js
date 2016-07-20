export class App {
  configureRouter(config, router) {
    config.title = 'ATL-RLC';
    config.map([
      // { route: ['','home'], name: 'home', moduleId: './home/home', nav: false, title:'Home' },
      { route: 'teams', name: 'teams', moduleId: './teams/teams', nav: true, title:'Teams' },
      { route: 'players', name: 'players', moduleId: './players/players', nav: true, title:'Players' },
      { route: 'games', name: 'games', moduleId: './games/games', nav: true, title:'Games' }
    ]);

    this.router = router;
  }
}
