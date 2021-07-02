import { DSVRowArray } from 'd3';
import { BaseDataset } from './BaseDataset';

type MultivariateDatasetEntry = {
  [key: string]: string | undefined,
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

  constructor(data: DSVRowArray<string>, columns: Array<string>) {
    this.data = data.map((entry) => entry);
    this.columns = columns;
    const [firstColumn] = columns;
    this.idColumn = firstColumn;
  }
}
