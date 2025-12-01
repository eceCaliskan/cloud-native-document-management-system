import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { initializeApp } from 'firebase/app';
import { FirebaseConfig } from './environment';

initializeApp(FirebaseConfig)  

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
