import SpreadSheet = GoogleAppsScript.Spreadsheet.Spreadsheet;

export class SessionSheet {
  static readonly SIZE_CELL = 'B1';
  static readonly MARGIN = 1;
  static sheet: SpreadSheet;

  static onOpen(event) {
    SessionSheet.sheet = SpreadsheetApp.getActive();
    console.log(event);
  }

  static OnEdit(event) {
    console.log(event);
    console.log(SessionSheet.sheet);
  }

  constructor() {}
}
