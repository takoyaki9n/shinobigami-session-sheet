import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

import { SessionSheet } from './SessionSheet';

declare var global: any;

global.SESSION_CONFIG = (size: number): number => {
  return SessionSheet.SESSION_CONFIG(size);
};

global.onEdit = (): void => {
  SessionSheet.onEdit();
};
