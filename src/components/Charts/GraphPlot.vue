<template>
  <div class="scatterplot" ref="root">
    <svg class="scatterplot-svg" :viewBox="`0 0 ${this.width} ${this.height}`">
      <g v-for="(node, index) in nodes" :key="index + node.id"
      :transform="`translate(${node.x},${node.y})`"
      >
        <circle r=5 />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { GraphDataset, GraphLink, GraphNode } from '@/models/GraphDataset';
import * as d3 from 'd3';
import Vue from 'vue';

export default Vue.extend({
  props: {
    dataset: {
      type: Object as () => GraphDataset,
    },
  },

  data() {
    return {
      nodesA: this.dataset.data.nodes,
      height: 800,
      width: 800,
      margin: {
        top: 40, right: 40, bottom: 40, left: 40,
      },
    };
  },

  computed: {
    nodes(): GraphNode[] {
      return this.dataset.data.nodes;
    },

    links(): GraphLink<GraphNode>[] {
      return this.dataset.data.links;
    },
  },

  created() {
    d3.forceSimulation<GraphNode>(this.nodes)
      .force('link', d3.forceLink<GraphNode, GraphLink<GraphNode>>(this.links).id((d) => d.id))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(this.width / 2, this.height / 2))
      .force('x', d3.forceX())
      .force('y', d3.forceY());
  },
});
</script>
