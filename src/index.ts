import { NgModule, ModuleWithProviders, OpaqueToken, Injector } from '@angular/core';
import { N9HttpClientModule } from '@neo9/n9-angular2-http-client';
import { IonicModule } from 'ionic-angular';

import { N9LoadingModalComponent } from './n9-loading-modal.component';
import { N9LoadingModalService } from './n9-loading-modal.service';
import { CommonModule } from "@angular/common";

export const N9_HTTP_PROVIDERS = new OpaqueToken('n9-http-providers');
export * from './n9-loading-modal.service';
export * from './n9-loading-modal.component';

export function createLoadingModalService(providersName: OpaqueToken[], injector: Injector) {
  return new N9LoadingModalService(providersName, injector);
}

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    N9HttpClientModule
  ],
  declarations: [
    N9LoadingModalComponent
  ],
  exports: [
    N9LoadingModalComponent
  ]
})
export class N9LoadingModalModule {
  static forRoot(providersName?: OpaqueToken[]): ModuleWithProviders {
    return {
      ngModule: N9LoadingModalModule,
      providers: [
        { provide: N9_HTTP_PROVIDERS, useValue: providersName || [] },
        { provide: N9LoadingModalService, useFactory: (createLoadingModalService), deps: [N9_HTTP_PROVIDERS, Injector] }
      ]
    };
  }
}
