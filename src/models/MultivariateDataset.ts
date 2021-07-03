import { BaseDataset } from './BaseDataset';

export type MultivariateDatasetEntry = {
  [key: string]: number,
 };

export interface MultivariateDataset extends BaseDataset {
  data: Array<MultivariateDatasetEntry>,
  columns: Array<string>,
  idColumn: string,
}

export class MultivariateDatasetImpl implements MultivariateDataset {
  data: Array<MultivariateDatasetEntry>;

  columns: Array<string>;

  idColumn: string;

  constructor(data: Array<MultivariateDatasetEntry>, columns: Array<string>, idColumn: string) {
    this.data = data;
    this.columns = columns;
    this.idColumn = idColumn;
  }
}
