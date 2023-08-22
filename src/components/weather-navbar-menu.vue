<template>
    <div class="container ">
        <ul class="navbar-nav d-flex flex-row gap-3">
            <li class="navbar-item">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="navbar-item">
                <a class="nav-link" href="#">About</a>
            </li>
        </ul>
    </div>
    <WeatherHourly v-if="isOpenHourly"/>
</template>
<script>
import WeatherHourly from './weather-hourly.vue'
import { mapState } from 'vuex';
export default {
    components: {
        WeatherHourly
    },
    computed:{
        ...mapState({
            isOpenHourly: state => state.weather.isOpenHourly,
        })
    }
}
</script>
<style scoped>
.navbar-nav li .nav-link {
    color: var(--white);
    font-family: monospace;
    font-size: 20px;
}
</style>