<template>
  <div class="">
    <WeatherHeader/>
    <WeatherCard/>
  </div>
</template>

<script>
import {WeatherHeader,WeatherCard} from './components'; // Doimiy fayl kiritish     // Doimiy fayl kiritish

export default {
  name: 'App', 
  components: {
    WeatherCard,
    WeatherHeader
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

:root {
  --primary: #3b82f6;
  --secondary: rgb(209, 255, 255);
  --white: #fff;
  --font: Poppins;
}

body {
  margin: 0;
}
</style>
