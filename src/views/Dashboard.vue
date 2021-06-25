<template>
  <div class="dashboard">
    <bootstrap-test />
    <scatter-plot />
  </div>
</template>

<script lang="ts">
import BootstrapTest from '@/components/BootstrapTest.vue';
import ScatterPlot from '@/components/Charts/ScatterPlot.vue';
import Vue from 'vue';

export default Vue.extend({
  components: { BootstrapTest, ScatterPlot },
  name: 'Dashboard',
});
</script>
