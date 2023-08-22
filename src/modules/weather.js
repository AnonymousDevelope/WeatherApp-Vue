import WeatherService from "../service/weather";
const state = {
    data:null,
    loading:false,
    error:null,
}

const mutations = {
    getDataStart(state){
        state.loading = true;
        state.data=null;
        state.error=null;
    },
    getDataSuccess(state,payload){
        state.loading = false;
        state.data=payload;
        state.error=null;
    },
    getDataError(state,payload){
        state.loading = false;
        state.data=null;
        state.error=payload;
    }
}

const actions = {
    getData({commit},city){
        return new Promise((resolve,reject)=>{
            commit('getDataStart');
            WeatherService.getData(city).then(res=>{
                commit('getDataSuccess',res.data);
                resolve(res.data);
            }).catch(err=>{
                commit('getDataError',err)
                reject(err);
            })
        })
    }
}

export default{
    state,
    mutations,
    actions
}