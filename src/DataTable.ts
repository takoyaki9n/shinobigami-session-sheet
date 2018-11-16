import Sheet = GoogleAppsScript.Spreadsheet.Sheet;
import Range = GoogleAppsScript.Spreadsheet.Range;

import { Player } from './Player';

export class DataTable {
  protected static HEADER_ROWS = 2;
  protected static LEFT_COLS = 2;
  protected static TABLE_WIDTH_MAX = 100;
  protected static DELIMITER_ROW: number;
  protected static DELIMITER: string;

  protected sheet: Sheet;
  protected players: Player[];
  protected range: Range;

  constructor(sheet: Sheet, size: number, row: number, column: number) {
    this.sheet = sheet;
    this.players = this.initPlayers(row, column);
    this.range = this.initRange(row, column);
  }

  protected initPlayers(row: number, column: number): Player[] {
    return null;
  }

  protected initRange(row: number, column: number): Range {
    return null;
  }

  protected isDelimiter(row: number, column: number): boolean {
    const cell = this.sheet.getRange(row, column);
    const value = cell.getDisplayValue();
    return value == DataTable.DELIMITER;
  }
}
