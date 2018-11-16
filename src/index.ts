import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

import { SessionSheet } from './SessionSheet';

declare var global: any;

<<<<<<< HEAD
global.SESSION_CONFIG = (size: number): number => {
  return SessionSheet.SESSION_CONFIG(size);
||||||| merged common ancestors
global.Initialize = (): void => {
  SessionSheet.Initialize();
=======
global.onOpen = (event): void => {
  SessionSheet.onOpen(event);
>>>>>>> ce0d4bf0cb694922b1f0f86c45db2331511dc94d
};

<<<<<<< HEAD
global.onEdit = (): void => {
  SessionSheet.onEdit();
||||||| merged common ancestors
global.Run = (event): void => {
  SessionSheet.OnEdit(event);
=======
global.onEdit = (event): void => {
  SessionSheet.OnEdit(event);
>>>>>>> ce0d4bf0cb694922b1f0f86c45db2331511dc94d
};
