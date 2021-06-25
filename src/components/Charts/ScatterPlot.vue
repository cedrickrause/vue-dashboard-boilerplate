<template>
  <div class="scatterplot">
    <svg height=800 width=800>
      <circle v-for="car in getData" :key="car.model"
        :cx="30 * car.mpg"
        :cy="5 * car.hp"
        :r="10"
        />
    </svg>
  </div>
</template>

<script lang="ts">
import { Getters } from '@/store/getters';
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters({ getData: Getters.GET_DATA }),
  },
});
</script>
