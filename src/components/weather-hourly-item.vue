<template>
    <div class="hourly-item shadow col-md-6 col-xl-3 ">
        <div class="row align-items-center">
            <div class="col-6 icon">
                <img :src="item.condition.icon" alt="">
            </div>
            <div class="col-6 temprature">
                <div class="temp_c">{{ item.temp_c }}°C</div>
                <div class="feel-temp ">feelsike temp {{ Math.floor(item.feelslike_c)}}°C</div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 date">
                {{ date }}
            </div>
        </div>
    </div>
</template>
<script>
import { convertDateTime } from '../utils'
export default {
    props:{
        item:{
            type:Object,
            required:true
        }
    },
    data(){
        return{
            date:convertDateTime(this.item.time),
        }
    }
}
</script>
<style>
.hourly-item {
    border-radius: 1rem;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* margin: 1; */
}
.hourly-item .temprature{
    display: flex;
    flex-direction: column;
    font-family: monospace;
    /* width: fit-content; */
}

.hourly-item .temprature .temp_c{
    font-size: 2rem;
    font-weight: bold;
}

.hourly-item .temprature .feel-temp{
    font-size: 1rem;
    font-weight: bold;
}
.hourly-item .date{
    font-size: 1rem;
    font-weight: bold;
    width: 75%;
    text-align: center;
    margin: 0 auto;
}
</style>