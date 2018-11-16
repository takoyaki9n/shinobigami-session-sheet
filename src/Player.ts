import Range = GoogleAppsScript.Spreadsheet.Range;

export class Player {
  public id: number;
  public range: Range;

  constructor(id: number, range: Range) {
    this.id = id;
    this.range = range;
  }
}
