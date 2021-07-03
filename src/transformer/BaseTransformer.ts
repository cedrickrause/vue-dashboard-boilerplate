import { BaseDataset } from '@/models/BaseDataset';

export interface BaseTransformer {
  transform(data: unknown): Promise<BaseDataset>
}
