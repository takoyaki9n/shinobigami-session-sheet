import Sheet = GoogleAppsScript.Spreadsheet.Sheet;
import Range = GoogleAppsScript.Spreadsheet.Range;

import { PropertyKeys } from './PropertyKeys';

namespace Flag {
  export const ACQUIRE = '獲';
  export const SHARE = '共';
  export const HAVE = '持';
}

namespace SheetConst {
  export const TOP_ROW = 2;
  export const MARGIN = 1;
}

export class SessionSheet {
  private static readonly PROPERTIES = PropertiesService.getScriptProperties();

<<<<<<< HEAD
  static SESSION_CONFIG(size: number): number {
    SessionSheet.PROPERTIES.setProperty(PropertyKeys.SIZE, size.toString());
    return size;
||||||| merged common ancestors
  static Initialize() {
    SessionSheet.sheet = SpreadsheetApp.getActive();
=======
  static onOpen(event) {
    SessionSheet.sheet = SpreadsheetApp.getActive();
    console.log(event);
>>>>>>> ce0d4bf0cb694922b1f0f86c45db2331511dc94d
  }

<<<<<<< HEAD
  static onEdit() {
    const sessionSheet = new SessionSheet();
||||||| merged common ancestors
  static OnEdit(event: any) {
    console.log(event);
    console.log(SessionSheet.sheet);
=======
  static OnEdit(event) {
    console.log(event);
    console.log(SessionSheet.sheet);
>>>>>>> ce0d4bf0cb694922b1f0f86c45db2331511dc94d
  }

  private size: number;
  private sheet: Sheet;
  private cell: Range;

  constructor() {
    const value = SessionSheet.PROPERTIES.getProperty(PropertyKeys.SIZE);
    this.size = Number(value);
    if (this.size == null || isNaN(this.size))
      throw new Error('SESSION_CONFIG関数で設定してください。');
    this.sheet = SpreadsheetApp.getActiveSheet();
    this.cell = this.sheet.getActiveCell();
  }
}
