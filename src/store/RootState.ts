import { MultivariateDataset } from '@/models/MultivariateDataset';

export interface RootState {
  data: MultivariateDataset | null,
  selectedElementId: string | null,
}
