<template>
  <div id="app">
    <Title msg="Visual Analytics Dashboard Boilerplate" />
    <div id="nav">
      <b-nav tabs align="center">
        <b-nav-item to="/" exact exact-active-class="active">Dashboard</b-nav-item>
        <b-nav-item to="/about" exact exact-active-class="active">About</b-nav-item>
      </b-nav>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Title from '@/components/Title.vue';

export default Vue.extend({
  components: {
    Title,
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

#nav {
  padding-bottom: 10px;
}
</style>
