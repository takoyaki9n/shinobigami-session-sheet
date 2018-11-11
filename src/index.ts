import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

import { SessionSheet } from './SessionSheet';

declare var global: any;

global.onOpen = (event): void => {
  SessionSheet.onOpen(event);
};

global.onEdit = (event): void => {
  SessionSheet.OnEdit(event);
};
