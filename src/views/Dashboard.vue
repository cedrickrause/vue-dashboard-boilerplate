<template>
  <div class="dashboard">
    <bootstrap-test />
  </div>
</template>

<script lang="ts">
import BootstrapTest from '@/components/BootstrapTest.vue';
import Vue from 'vue';

export default Vue.extend({
  components: { BootstrapTest },
  name: 'Dashboard',
});
</script>
