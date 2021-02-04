import * as http from 'http';
import { RootModule } from '@ts-stack/ditsmod';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module';
import { DefaultsModule } from './modules/services/defaults/defaults.module';

/**
 * Any one of these options are optional.
 */
@RootModule({
  httpModule: http,
  serverName: 'Node.js',
  serverOptions: {},
  listenOptions: { port: 8080, host: 'localhost' },
  prefixPerApp: '',
  imports: [DefaultsModule, HelloWorldModule],
  exports: [DefaultsModule],
  controllers: [],
  providersPerApp: [],
  providersPerMod: [],
  providersPerReq: [],
})
export class AppModule {}
