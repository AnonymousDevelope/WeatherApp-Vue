<template>
    <div class="weather-card">
        <Loading v-if="loading"/>
        <div v-if="!loading" class="weather-title">
            Weather of {{ currentLocation }}
            <!-- write city -->
        </div>
        <div v-if="!loading" class="weather-card-main">
            <div class="container">
                <div class="row align-items-center justify-content-center px-2 py-1">
                    <div class="col-md-4">
                        <div class="locationDateTemp d-flex flex-column">
                            <div class="location d-flex align-items-center ">
                                <i class="bi bi-geo-alt-fill"></i>
                                <span>{{ currentLocation }}</span>
                            </div>
                            <div class="Date d-flex align-items-center">
                                <i class="bi bi-calendar-month-fill"></i>
                                <div class="date-text">
                                    {{ converDate(localTime) }}
                                </div>
                            </div>
                            <div class="temp d-flex align-items-center">
                                <i class="bi bi-thermometer-sun"></i>
                                <div class="temp-text">
                                    {{ currentTemp }}°
                                    <div class="feel-temp">Feels like {{ feelsLike }}°</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="weather-condition w-100">
                            <div class="weather-condition-icon">
                                <img :src="icon" alt="">
                            </div>
                            <div class="weather-condition-text">
                                {{ conditionText }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <ul class="list-group">
                            <li class="row">
                                <div class="col-2">
                                    <i class="bi bi-sunrise"></i>
                                </div>
                                <div class="col-10">
                                    Quyosh chiqishi {{ astro?.sunrise }}
                                </div>
                            </li>
                            <li class="row">
                                <div class="col-2">
                                    <i class="bi bi-sunset"></i>
                                </div>
                                <div class="col-10">
                                    Quyosh botishi {{ astro?.sunset }}
                                </div>
                            </li>
                            <li class="row">
                                <div class="col-2">
                                    <i class="bi bi-droplet"></i>
                                </div>
                                <div class="col-10">
                                    Namlik {{ humidity }}%
                                </div>
                            </li>
                            <li class="row">
                                <div class="col-2">
                                    <i class="bi bi-wind"></i>
                                </div>
                                <div class="col-10">
                                    {{ wind }} km/h
                                </div>
                            </li>
                            <li class="row">
                                <div class="col-2">
                                    <i class="bi bi-compass"></i>
                                </div>
                                <div class="col-10">
                                    {{ wind_dir == "N" ? "North" :
                                        wind_dir == "S" ? "South" : wind_dir == "E" ?
                                            "East" : wind_dir == "W" ?
                                                "West" : wind_dir == "NE" ?
                                                    "North East" : wind_dir == "NW" ?
                                                        "North West" : wind_dir == "SE" ?
                                                            "South East" : wind_dir == "SW" ?
                                                                "South West" : wind_dir == "NNE" ?
                                                                "North North East" : wind_dir == "NNW"?
                                                                "North North West" : wind_dir == "SSE"?
                                                                "South South East" : wind_dir 
                                                             }}
                                </div>
                            </li>
                            <li class="row">
                                <div class="col-2">
                                    <i class="bi bi-arrow-up"></i>
                                </div>
                                <div class="col-10">
                                    1023.00 mb
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
const daysOfWeek = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
const monthsOfYear = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
export default {
    name: 'Card',
    computed: {
        ...mapState({
            currentLocation: state => state?.weather?.data?.location.region,
            localTime: state => state?.weather?.data?.location.localtime,
            currentTemp: state => state?.weather?.data?.current.temp_c,
            feelsLike: state => state?.weather?.data?.current.feelslike_c,
            icon: state => state?.weather?.data?.current.condition.icon,
            conditionText: state => state?.weather?.data?.current.condition.text,
            astro: state => state?.weather?.data?.forecast.forecastday[0].astro,
            humidity: state => state?.weather?.data?.current.humidity,
            wind: state => state?.weather?.data?.current.wind_kph,
            wind_dir: state => state?.weather?.data?.current.wind_dir,
            loading: state => state?.weather?.loading
        })
    },
    created() {
        this.$store.dispatch('getData', 'Tashkent');
    },
    methods: {
        converDate(date) {
            const nowDate = new Date(date);
            const day = daysOfWeek[nowDate.getDay()];
            const month = monthsOfYear[nowDate.getMonth()];
            return `${day} ${nowDate.getDate()} ${month}`
        }
    }
}
</script>
<style scoped>
.weather-card {
    width: 65%;
    height: auto;
    border-radius: 1.5rem;
    margin: 25px auto;
    background-color: var(--primary);
}

.weather-card .weather-title {
    color: var(--white);
    font-family: monospace;
    font-size: 30px;
    text-align: center;
}

.weather-card .weather-card-main {
    width: 100%;
    font-family: monospace;
}

.weather-card .weather-card-main .locationDateTemp {
    margin-top: 20px;
    gap: 12px;
}

.weather-card .weather-card-main .locationDateTemp i {
    color: var(--white);
}

.weather-card .weather-card-main .locationDateTemp .location {
    font-size: 30px;
    color: var(--white);
    font-weight: 600;
    gap: 12px;
}

.weather-card .weather-card-main .locationDateTemp .Date {
    font-size: 30px;
    color: var(--secondary);
    font-weight: 600;
    gap: 12px;
}

.weather-card .weather-card-main .locationDateTemp .temp {
    font: optional;
    color: var(--white);
    font-weight: bold;
}

.weather-card .weather-card-main .locationDateTemp .temp-text {
    font-size: 3rem;
}

.weather-card .weather-card-main .locationDateTemp .temp-text .feel-temp {
    font-size: 20px;
    color: var(--secondary);
}

.weather-card .weather-card-main .locationDateTemp .temp i {
    font-size: 3.5rem;
    font-weight: 1000;
}

.weather-condition {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
}

.weather-condition .weather-condition-icon img {
    width: 200px;
    height: 200px;
}

.weather-condition .weather-condition-text {
    color: var(--secondary);
    font-size: 30px;
    font-weight: 900;
    font-family: monospace;
}

.list-group {
    color: var(--white);
    font-size: 23px;
    font-weight: 900;
    font-family: monospace;

}
</style>