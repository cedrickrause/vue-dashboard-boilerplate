import * as d3 from 'd3';
import { ScaleLinear } from 'd3';

export type SvgSelection = d3.Selection<SVGSVGElement, unknown, null, unknown>;

export type D3MultiScale = {
  [key: string]: ScaleLinear<number, number, never>
}

export type LineCoordinates = Array<[number, number]>;
