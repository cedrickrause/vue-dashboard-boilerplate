<template>
  <div class="home">
    <bootstrap-test />
  </div>
</template>

<script lang="ts">
import BootstrapTest from '@/components/BootstrapTest.vue';
import Vue from 'vue';

export default Vue.extend({
  components: { BootstrapTest },
  name: 'Home',
});
</script>
