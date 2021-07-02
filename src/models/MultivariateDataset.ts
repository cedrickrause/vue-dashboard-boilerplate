import { DSVRowArray } from 'd3';

type MultivariateDatasetEntry = {
  [key: string]: string | undefined,
 };

export interface MultivariateDataset {
  data: Array<MultivariateDatasetEntry>,
  columns: Array<string>,
}

export class MultivariateDatasetImpl implements MultivariateDataset {
  data: Array<MultivariateDatasetEntry>;

  columns: Array<string>;

  constructor(data: DSVRowArray<string>, columns: Array<string>) {
    this.data = data.map((entry) => entry);
    this.columns = columns;
  }
}
