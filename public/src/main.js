import 'fetch';
import {HttpClient} from 'aurelia-fetch-client';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('redpelicans/aurelia-material');

  configureContainer(aurelia.container);

  aurelia.start().then(() => aurelia.setRoot());
}

function configureContainer(container) {
  let http = new HttpClient();
  http.configure(config => {
    config
      .withBaseUrl('api/v1/')
  });
  container.registerInstance(HttpClient, http);
}
