import { I18nConfiguration } from '@aurelia/i18n';
import Fetch from 'i18next-fetch-backend';
import Aurelia from 'aurelia';
import { MyApp } from './my-app';

Aurelia
  .register(
    I18nConfiguration.customize((options) => {
      options.initOptions = {
        plugins: [Fetch],
        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        lng: 'en',
        fallbackLng: 'en',
        debug: !PRODUCTION
      };
    })
  )
  .app(MyApp)
  .start();
