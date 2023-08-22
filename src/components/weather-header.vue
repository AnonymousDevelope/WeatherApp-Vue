<template>
    <div class="weather_header">
        <div class="weather_header_logo">
            <img :src="logoImage" alt="" srcset="">
            <h1>Weather App</h1>
        </div>
        <div class="weather_search">
            <Input />
        </div>
        <div class="weather-menu ">  
            <weatherNavbarMenu />
        </div>
    </div>
</template>
<script>
import logoImage from '../logo/weatherAppLogo.png'
import weatherNavbarMenu from './weather-navbar-menu.vue';
export default {
    data(){
        return{
            logoImage,
        }
    },
    components:{
        weatherNavbarMenu
    }
}
</script>
<style scoped>
    .weather_header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        font-family: monospace;
        color: var(--white);
        background-color: var(--primary);
    }
    .weather_header_logo{
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    .weather_header_logo img{
        height: 50px;
        width: 50px;
    }
    @media screen and (max-width: 760px) {
      .weather_header .weather-menu{
        display: none;
      } 
        
    }
</style>