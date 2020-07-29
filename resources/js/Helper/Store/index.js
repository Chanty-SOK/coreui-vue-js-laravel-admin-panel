import Vue from 'vue';
import Vuex from 'vuex';
import VuexLoggerPlugin from 'vuex-logger-plugin'
import ApplicationContext from './modules/ApplicationContext';
import DataTable from './modules/DataTable';
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
    state: {
        isLoading: false,
        locale: localStorage.getItem('locale') || null,
    },
    getters: {
        isLoading: (state) => {
            return state.isLoading;
        },
        locale: (state) => {
            return state.locale
        }
    },
    mutations: {
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setLocale(state, locale) {
            state.locale = locale;
            localStorage.setItem('locale', locale);
        }
    },
    modules: {
        ApplicationContext,
        DataTable
    },
    strict: debug,
    plugins: debug ? [VuexLoggerPlugin] : []
});
