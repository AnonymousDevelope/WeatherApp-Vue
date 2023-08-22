<template>
  <div>
    <div class="daily-container">
      <div class="row flex-md-row m-auto flex-column justify-content-between">
        <weather-daily-item
          v-if="daily && daily.length"
          :openHourly="() => openHourly(index)"
          v-for="(item, index) in daily"
          :key="index"
          :item="item"
        />
      </div>
    </div>
    <WeatherHourly v-if="isOpenHourly"/>
  </div>
</template>

<script>
import WeatherDailyItem from './weather-daily-item.vue';
import { mapState } from 'vuex';
import WeatherHourly from './weather-hourly.vue'
export default {
  components: {
    WeatherDailyItem,
    WeatherHourly
  },
  computed: {
    ...mapState({
      error: state => state.weather.error,
      loading: state => state.weather.loading,
      daily: state => state.weather.data?.forecast?.forecastday,
      isOpenHourly: state => state.weather.isOpenHourly,
    }),
  },
  methods: {
    openHourly(idx) {
      this.$store.dispatch('isOpenHourly', true);
      this.$store.dispatch('getHourly', this.daily[idx]);
    },
  },
};
</script>

<style>
.daily-container {
    width: 75%;
    margin: 0 auto;
    border-radius: 2rem;
    padding: 12px;
    display: flex;
}
</style>