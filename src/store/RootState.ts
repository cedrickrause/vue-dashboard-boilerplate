import { GraphDataset } from '@/models/GraphDataset';
import { MultivariateDataset } from '@/models/MultivariateDataset';

export interface RootState {
  data: MultivariateDataset | null,
  graph: GraphDataset | null,
  selectedElementId: string | null,
}
