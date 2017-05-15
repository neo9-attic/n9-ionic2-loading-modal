# n9-angular2-http-client

## Installation

To install this library, run:

```bash
$ npm install n9-angular2-http-client --save
```

## Usage

```bash
$ npm install n9-angular2-http-client
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { N9HttpClientModule } from 'n9-angular2-http-client';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // This import will initialize with the default N9HttpClientService but you can also inject OpaqueToken[] to inject multiple instances
    N9HttpClientModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Gaetan SENN](mailto:gaetan.senn@gmail.com)
