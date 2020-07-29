import axios from 'axios';
import store from "./Store";

const chttp = {};
chttp.install = function (Vue, options) {
    Vue.prototype.$chttp = {
        getConfig() {
            let header = {
                headers: {
                    'X-Access-Token': store.getters.getAccessToken,
                    'Accept': 'application/json'
                }
            };
            if (store.getters.locale) {
                header.headers["Accept-Language"] = store.getters.locale;
            }
            return header;
        },
        postMultiple(url, formData, alert = true) {
            store.commit('setLoading', true);
            return new Promise((response) => {
                let header = this.getConfig();
                header.headers['Content-Type'] = 'multipart/form-data';
                axios.post(url, formData, header).then(result => {
                    store.commit('setLoading', false);
                    if(alert) {
                        Vue.$swal(Vue.i18n.translate('common.success'),{
                            icon: "success",
                            button: false,
                            timer: 1000
                        });
                    }
                    response(result);
                }).catch(() => {
                    if(alert) {
                        Vue.$swal(Vue.i18n.translate('common.failed'),{
                            icon: "error",
                            button: false,
                            timer: 1000
                        });
                    }
                    store.commit('setLoading', false);
                });
            });
        },
        post(url, params, alert = true) {
            store.commit('setLoading', true);
            return new Promise((response, reject) => {
                axios.post(url, params, this.getConfig()).then(result => {
                    store.commit('setLoading', false);
                    if(alert) {
                        Vue.$swal(Vue.i18n.translate('common.success'),{
                            icon: "success",
                            button: false,
                            timer: 1000
                        });
                    }
                    response(result);
                }).catch((e) => {
                    if(alert) {
                        Vue.$swal(Vue.i18n.translate('common.failed'),{
                            icon: "error",
                            button: false,
                            timer: 1000
                        });
                    }
                    reject(e);
                    store.commit('setLoading', false);
                });
            });
        },

        get(url) {
            store.commit('setLoading', true);
            return new Promise((response, reject) => {
                axios.get(url, this.getConfig()).then(result => {
                    store.commit('setLoading', false);
                    response(result);
                }).catch((e) => {
                      reject(e);
                      store.commit('setLoading', false);
                });
            });
        },

        delete(url, alert = true) {
            store.commit('setLoading', true);
            return new Promise((response) => {
                axios.delete(url, this.getConfig()).then(result => {
                    store.commit('setLoading', false);
                    if(alert) {
                        Vue.$swal(Vue.i18n.translate('common.success'),{
                            icon: "success",
                            button: false,
                            timer: 1000
                        });
                    }
                    response(result);
                }).catch(() => {
                    if(alert) {
                        Vue.$swal(Vue.i18n.translate('common.failed'),{
                            icon: "error",
                            button: false,
                            timer: 1000
                        });
                    }
                    store.commit('setLoading', false);
                });
            });
        },

        put(url, params, alert = true) {
            store.commit('setLoading', true);
            return new Promise((response, reject) => {
                axios.put(url, params,this.getConfig()).then(result => {
                    store.commit('setLoading', false);
                    if(alert) {
                        Vue.$swal(Vue.i18n.translate('common.success'),{
                            icon: "success",
                            button: false,
                            timer: 1000
                        });
                    }
                    response(result);
                }).catch((e) => {
                    if(alert) {
                        Vue.$swal(Vue.i18n.translate('common.failed'),{
                            icon: "error",
                            button: false,
                            timer: 1000
                        });
                    }
                    reject(e);
                    store.commit('setLoading', false);
                });
            });
        },
    }
};
export default chttp;

