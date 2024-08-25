import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_SERVICE_CONFIG, APP_CONFIG } from './app/appConfig/appconfig.service';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }
  ]
}).catch(err => console.error(err));



// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));