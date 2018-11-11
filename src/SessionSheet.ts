import SpreadSheet = GoogleAppsScript.Spreadsheet.Spreadsheet;

export class SessionSheet {
  static readonly SIZE_CELL = 'B1';
  static readonly MARGIN = 1;
  static sheet: SpreadSheet;

  static Initialize() {
    SessionSheet.sheet = SpreadsheetApp.getActive();
  }

  static OnEdit(event: any) {
    console.log(event);
    console.log(SessionSheet.sheet);
  }

  constructor() {}
}
