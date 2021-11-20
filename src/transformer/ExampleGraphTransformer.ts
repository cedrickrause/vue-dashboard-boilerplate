/* eslint-disable class-methods-use-this */
import {
  GraphDataset, GraphDatasetImpl, GraphNode,
} from '@/models/GraphDataset';
import * as d3 from 'd3';
import { BaseTransformer } from './BaseTransformer';

export interface ExampleGraphTransformer extends BaseTransformer {
  transform(filename: string): Promise<GraphDataset>
}

export class ExampleGraphTransformerImpl implements ExampleGraphTransformer {
  static instance = new ExampleGraphTransformerImpl();

  async transform(filename: string): Promise<GraphDataset> {
    const nodes: GraphNode[] = [];
    const graphDataset = await d3.csv(filename).then((loadedData) => {
      const links = loadedData
        .map((entry) => {
          let sourceNode = nodes.find((node) => node.id === entry.Source);
          let targetNode = nodes.find((node) => node.id === entry.Target);

          if (!sourceNode) {
            sourceNode = { id: entry.Source as string };
            nodes.push(sourceNode);
          }
          if (!targetNode) {
            targetNode = { id: entry.Target as string };
            nodes.push(targetNode);
          }

          const weight = entry.weight as string;

          return { source: sourceNode, target: targetNode, weight: +weight };
        });
      return new GraphDatasetImpl(
        nodes, links,
      );
    });
    return graphDataset;
  }
}
