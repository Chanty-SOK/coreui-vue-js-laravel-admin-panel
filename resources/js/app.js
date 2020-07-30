require("./bootstrap");

import Vue from "vue";
import Router from "vue-router";
import { iconsSet as icons } from "./Helper/icons/CoreUI";
import route from "./Helper/route";
import store from "./Helper/Store";
import App from "./App.vue";
import vuexI18n from "vuex-i18n";
import Http from "./Helper/Http";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AwsomeFont from "./Helper/icons/AwsomeFont";
import { CTooltip } from "@coreui/vue";
import VueSwal from "vue-swal";
import VeeValidate from "vee-validate";
import validationMessages from "vee-validate/dist/locale/ja";

Vue.use(VeeValidate, {
    locale: "en",
    dictionary: {
        ja: validationMessages
    },
    inject: true,
    fieldsBagName: "veeFields",
    errorBagName: "veeErrors",
    classes: true,
    classNames: {
        valid: "is-valid",
        invalid: "is-invalid"
    }
});

Vue.directive("c-tooltip", CTooltip);

Vue.mixin({
    methods: {
        validateState(ref) {
            if (
                this.veeFields[ref] &&
                (this.veeFields[ref].dirty || this.veeFields[ref].validated)
            ) {
                return !this.veeErrors.has(ref);
            }
            return null;
        }
    }
});

Vue.use(VueSwal);
// i18n
Vue.use(vuexI18n.plugin, store, {});
require("./i18n");
Vue.config.productionTip = false;

// Configure Route
Vue.use(Router);
Vue.use(Http);
let router = new Router({
    linkExactActiveClass: "active",
    routes: route,
    scrollBehavior: to => {
        if (to.hash) {
            return {
                selector: to.hash
            };
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    }
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLogin) {
            next({
                path: "/login"
            });
        } else {
            store.dispatch("checkLogin");
            if (store.getters.user) {
                store.commit("setLocale", store.getters.user.locale);
                Vue.i18n.set(store.getters.user.locale);
            }
            next();
        }
    } else if (to.matched.some(record => record.meta.isAnonymus)) {
        if (store.getters.locale) {
            Vue.i18n.set(store.getters.locale);
        } else {
            Vue.i18n.set(navigator.language);
        }
        if (store.getters.isLogin) {
            next({
                path: "/"
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
});
AwsomeFont.register();
Vue.component("font-awesome-icon", FontAwesomeIcon);
// Instance Vue
let vm = new Vue({
    router,
    icons,
    store,
    render: h => h(App)
}).$mount("#app");
store.$vm = vm;
