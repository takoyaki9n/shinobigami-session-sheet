import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

import { SessionSheet } from './SessionSheet';

declare var global: any;

global.Initialize = (): void => {
  SessionSheet.Initialize();
};

global.Run = (event): void => {
  SessionSheet.OnEdit(event);
};
