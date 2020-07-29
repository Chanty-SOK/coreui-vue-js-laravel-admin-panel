import Vue from "vue";

export default {
    state: {
        configures: JSON.parse(localStorage.getItem('dataTableConfigure')) || {},
    },
    getters: {
        getAllConfigures: (state) => {
            return state.configures;
        },
        getConfigure: (state) => (key) => {
            return {...state.configures[key]};
        }
    },
    mutations: {
        setConfigure(state, payload) {
            state.configures = Object.assign(state.configures, {
                [payload.routeUrl] : payload.configure
            });
            localStorage.setItem('dataTableConfigure', JSON.stringify(state.configures));
        },
        setInit(state, payload) {
            state.configures = Object.assign(state.configures, {
                [payload.routeUrl] : payload.configure
            });
            localStorage.setItem('dataTableConfigure', JSON.stringify(state.configures));
        }
    }
}