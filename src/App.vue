<template>
  <div class="">
    <WeatherHeader />
    <WeatherCard v-if="!error" />
    <div class="ui-components">
      <Alert v-if="error?.message == 'Network Error'">
        Iltimos Internet bilan ulanishni tekshirib ko'ring
      </Alert>
      <Alert v-if="error?.response?.status == 400">
        Ma'lumotlar topilmadi iltimos qaytdan kiriting
      </Alert>
    </div>
    <WeatherDaily />
  </div>
</template>

<script>
import { WeatherHeader, WeatherCard,WeatherDaily } from './components'; // Doimiy fayl kiritish     // Doimiy fayl kiritish
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    WeatherCard,
    WeatherHeader,
    WeatherDaily
  },
  computed: {
    ...mapState({
      error: state => state.weather.error,
      loading: state => state.weather.loading,
    })
  }
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
