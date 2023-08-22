<template>
    <div :style="style" class="hourly-container p-3">
      <div @click="closeHourly" class="close">
        <i class="bi bi-x px-2 py-3"></i>
      </div>
      <div class="item-container gap-3 mx-auto">
        <div class="row">
          <WeatherHourlyItem
            v-if="hourlyItem && hourlyItem.hour"
            :item="item"
            :key="index"
            v-for="(item, index) in hourlyItem.hour"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import WeatherHourlyItem from "./weather-hourly-item.vue";
  import { mapState } from "vuex";
  
  export default {
    components: {
      WeatherHourlyItem,
    },
    methods: {
      closeHourly() {
        this.$store.dispatch("isOpenHourly", false);
        this.$store.dispatch("getHourly", null);
        document.body.style.overflow = "auto";
      },
    },
    computed: {
      ...mapState({
        hourlyItem: (state) => state.weather.hourlyData,
        isOpenHourly: (state) => state.weather.isOpenHourly,
      }),
    },
    data() {
      return {
        style:{
            overflow: this.isOpenHourly ? 'hidden' : 'auto',
        }
      };
    },
  };
  </script>
  
  <style>
  .hourly-container {
    z-index: 999;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    background-color: var(--primary);
    opacity: 0.9;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  
  .hourly-container .close {
    border-radius: 1rem;
    background-color: var(--secondary);
    float: right;
    cursor: pointer;
    color: var(--primary);
    font-size: 2em;
    font-weight: 900;
    transition: all 0.15s ease-in-out;
  }
  
  .hourly-container .close:hover {
    background-color: var(--primary);
    color: var(--secondary);
  }
  
  .hourly-container .item-container {
    width: 75%;
  }
  </style>
  