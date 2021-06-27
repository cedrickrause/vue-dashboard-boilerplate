import { DSVRowArray } from 'd3';

type MultivariateDatasetEntry = {
  [key: string]: string | undefined,
 };

export interface MultivariateDataset {
  data: Array<MultivariateDatasetEntry> | null,
  columns: Array<string> | null,
}

export class MultivariateDatasetImpl implements MultivariateDataset {
  data: Array<MultivariateDatasetEntry> | null;

  columns: Array<string> | null;

  constructor(data: DSVRowArray<string>, columns: Array<string>) {
    this.data = data.map((entry) => entry);
    this.columns = columns;
  }
}
