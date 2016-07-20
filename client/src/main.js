import 'aurelia-bootstrapper-webpack';
import 'aurelia-loader-webpack';
import 'isomorphic-fetch';
import {HttpClient} from 'aurelia-fetch-client';

require('../node_modules/font-awesome/css/font-awesome.css');
require('../styles/css/styles.css');

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize-bridge', bridge => bridge.useAll() );

  configureContainer(aurelia.container);

  aurelia.start().then(() => aurelia.setRoot());
}

function configureContainer(container) {
  let http = new HttpClient();
  http.configure(config => {
    config
      .withBaseUrl('http://localhost:3000/api/v1/')
  });
  container.registerInstance(HttpClient, http);
}
