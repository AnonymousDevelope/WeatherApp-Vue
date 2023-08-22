import WeatherService from "../service/weather";// Make sure these are imported

const state = {
    data: null,
    loading: false,
    error: null,
    isOpenHourly:false,
    hourlyData:null,
}

const mutations = {
    getDataStart(state) {
        state.loading = true;
        state.data = null;
        state.error = null;
    },
    getDataSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
        state.error = null;
    },
    getDataError(state, payload) {
        state.loading = false;
        state.data = null;
        state.error = payload;
    },
    isOpenHourly(state,isOpen){
        state.isOpenHourly = isOpen
    },

    getHourlySuccess(state, payload) {
        state.loading = false;
        state.hourlyData = payload;
        state.error = null;
    }
}

const actions = {
    getData({ commit }, city) {
        return new Promise((resolve, reject) => {
            commit('getDataStart');
            WeatherService.getData(city).then(res => {
                commit('getDataSuccess', res.data);
                resolve(res.data);
            }).catch(err => {
                commit('getDataError', err)
                reject(err);
            })
        })
    },

    isOpenHourly({commit},isOpen){
        commit('isOpenHourly',isOpen)
    },
    getHourly({ commit }, hourlyData) {
        commit('getHourlySuccess', hourlyData);
        document.body.style.overflow = 'hidden';
        window.scroll(0, 0);
    }
}

// Move convertDate outside mutations
export default {
    state,
    mutations,
    actions,
}
