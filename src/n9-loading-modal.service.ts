import { Injectable, OpaqueToken, Injector } from "@angular/core";

import { N9HttpClientService } from '@neo9/n9-angular2-http-client';

export interface Loader {
  loading: boolean
}

@Injectable()
export class N9LoadingModalService {
  public loader: Loader;

  constructor(private providersName: OpaqueToken[], private injector: Injector) {
    this.loader = {
      loading: false
    };

    let providers: N9HttpClientService[] = providersName.map((providerToInject) => {
      return injector.get(providerToInject);
    });

    if (!providers) providers.push(injector.get(N9HttpClientService));

    providers.forEach((client: N9HttpClientService) => {
      this.subscribeClient(client);
    });
  }

  subscribeClient(client: N9HttpClientService) {
    client.requestStart().subscribe(() => this.show());
    client.requestEndSuccess().subscribe(() => this.hide());
    client.requestEndError().subscribe(() => this.hide());
  }

  show() {
    this.loader.loading = true;
  }

  hide() {
    this.loader.loading = false;
  }
}
