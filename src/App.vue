<template>
  <div id="app">
    <Title msg="Visual Analytics Dashboard Boilerplate" />
    <navbar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Title from '@/components/Title.vue';
import Navbar from './components/Navbar.vue';

export default Vue.extend({
  components: {
    Title,
    Navbar,
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
