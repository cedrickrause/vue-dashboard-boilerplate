import { SimulationLinkDatum, SimulationNodeDatum } from 'd3-force';
import { BaseDataset } from './BaseDataset';

export interface GraphNode extends SimulationNodeDatum {
  id: string,
  x?: number,
  y?: number,
}

export interface GraphLink<P> extends SimulationLinkDatum<P> {
  source: P,
  target: P,
  weight: number,
}

export interface GraphDataset extends BaseDataset {
  data: {
    nodes: Array<GraphNode>,
    links: Array<GraphLink<GraphNode>>,
  }
}

export class GraphDatasetImpl implements GraphDataset {
  data: { nodes: GraphNode[]; links: GraphLink<GraphNode>[]; };

  constructor(nodes: Array<GraphNode>, links: Array<GraphLink<GraphNode>>) {
    this.data = { nodes, links };
  }
}
