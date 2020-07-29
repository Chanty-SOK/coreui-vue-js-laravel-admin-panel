import Vue from "vue";

export default {
    state: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        accessToken: localStorage.getItem('accessToken') || null
    },
    getters: {
        getAccessToken: (state) => {
            return state.accessToken;
        },
        isLogin: (state)  => {
            return state.accessToken != null;
        },
        user: (state) => {
            return state.user;
        }
    },
    mutations: {
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setUser: (state, user) => {
            localStorage.setItem('user',JSON.stringify(user));
            state.user = user;
        },
        setAccessToken: (state, accessToken) => {
            state.accessToken = accessToken;
            localStorage.setItem('accessToken', accessToken);
        },
        logout:(state) => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('user');
            state.accessToken = null;
            state.user = null;
        }
    },
    actions: {
        login(context, credential) {
            context.commit('setLoading', true);
            return new Promise((resolve, reject) => {
                this.$vm.$chttp.post('/api/admin/login', {
                    'name': credential.username,
                    'password': credential.password
                }).then(response => {
                    context.commit('setAccessToken', response.data);
                    // context.commit('setUser', response.data.user);
                    context.commit('setLoading', false);
                    resolve(response);
                }).catch(error => {
                    console.log(error);
                    reject(error);
                });
            });
        },
        checkLogin(context) {
            context.commit('setLoading', true);
            return new Promise((resolve, reject) => {
                Vue.prototype.$chttp.get('/api/admin/is-login').then(result => {
                    localStorage.setItem('user',JSON.stringify(result.data.data));
                    context.commit('setUser', result.data.data);
                }).catch(error => {
                    console.log("access token expire");
                    context.commit('logout');
                    location.reload();
                }).finally(() => {
                    context.commit('setLoading', false);
                });
            });
        },
        logout (context) {
            context.commit('setLoading', true);
            return new Promise((resolve, reject) => {
                this.$vm.$chttp.post('/api/admin/logout').then(response => {
                    context.commit('logout');
                    resolve(response);
                }).catch(error => {
                    context.commit('logout');
                    reject(error);
                    console.log(error);
                }).finally(() => {
                    context.commit('setLoading', false);
                });
            });
        },
        getUser(context) {
            context.commit('setLoading', true);
            return new Promise((resolve, reject) => {
                // Fake Login
                resolve(context.state.user);
                return;

                if(context.state.user) {
                    context.commit('setLoading', false);
                    resolve(context.state.user);
                    return;
                }
                this.$vm.$chttp.get('/api/user').then(response => {
                    localStorage.setItem('user',JSON.stringify(response.data));
                    context.commit('setUser', response.data);
                    resolve(response.data);
                }).catch(error => {
                    reject(error);
                    console.log(error);
                }).finally(() => {
                    context.commit('setLoading', false);
                });
            });
        }
    }
}