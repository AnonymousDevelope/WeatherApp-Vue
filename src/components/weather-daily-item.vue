<template>
    <div @click="openHourly" class="daily-item shadow col-12 my-2">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-6">
                    <div class="icon">
                        <img  :src="icon" alt="" srcset="">
                    </div>
                </div>
                <div class="col-6">
                    <div class="temp">
                        <div class="temp_c">
                            {{ temp_c }}°C
                        </div>
                        <div class="feel-temp">
                            min temp {{ mintemp_c }}°C 
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="text text-center">
                    <div class="date">
                        {{ date }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { convertDate } from '@/utils'
export default {
    name: 'DailyItem',
    props: {
        item:{
            type: Object,
            required: true
        },
        openHourly:{
            type: Function,
            required: true
        }
    },
    data(){
        return{
            temp:this.$props.item,
            date:convertDate(this.$props.item.date),
            temp_c:Math.floor(this.$props.item.day.avgtemp_c),
            mintemp_c:Math.floor(this.$props.item.day.mintemp_c),
            icon:this.$props.item.day.condition.icon,
        }
    }
}
</script>

<style scoped>
.daily-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    border-radius: 1rem;
    cursor: pointer;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
    width: 30%;
}
.daily-item:hover{
    transform: scale(1.2);
    z-index: 99;
}
.daily-item .temp{
    font-weight: 900;
    font-family: monospace;
    color: var(--secondary);
    font-size: 1.3rem;
    text-align: center;
}
.daily-item .temp .temp_c{
    font-size: 3rem;
    color: var(--white);
}
.daily-item .icon img{
    width: 100%;
}
.daily-item .text{
    font-family: monospace;
    color: var(--secondary);
}
.daily-item .text .date{
    font-size: 25px;
}
@media screen and (max-width: 900px) {
    .daily-item{
        width: 100%!important;
    }
}
</style>