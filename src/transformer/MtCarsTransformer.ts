/* eslint-disable class-methods-use-this */
import { MultivariateDataset, MultivariateDatasetEntry, MultivariateDatasetImpl } from '@/models/MultivariateDataset';
import * as d3 from 'd3';
import { BaseTransformer } from './BaseTransformer';

export interface MtCarsTransformer extends BaseTransformer {
  transform(filename: string): Promise<MultivariateDataset>
}

export class MtCarsTransformerImpl implements MtCarsTransformer {
  static instance = new MtCarsTransformerImpl();

  async transform(filename: string): Promise<MultivariateDataset> {
    const multivariateDataset = await d3.csv(filename).then((loadedData) => {
      const [idColumn] = loadedData.columns;

      const multivariateDatasetEntries = loadedData.map((entry) => {
        const multivariateDatasetEntry: MultivariateDatasetEntry = {};
        Object.keys(entry).slice(1).forEach((key) => {
          multivariateDatasetEntry[key] = parseFloat(entry[key] || '');
        });
        return multivariateDatasetEntry;
      });

      return new MultivariateDatasetImpl(
        multivariateDatasetEntries, loadedData.columns, idColumn,
      );
    });
    return multivariateDataset;
  }
}
