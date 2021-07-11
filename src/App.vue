<template>
  <div id="app">
    <ProjectTitle msg="Dashboard Boilerplate" />
    <navigation-bar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectTitle from '@/components/ProjectTitle.vue';
import NavigationBar from './components/NavigationBar.vue';

export default Vue.extend({
  components: {
    ProjectTitle,
    NavigationBar,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
