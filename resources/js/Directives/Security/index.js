import Vue from "vue";
import store from "../../Helper/Store";

Vue.directive('has-permission', {
    bind: (el, binding, vnode) => {
        if(Array.isArray(binding.value)) {
            if(!binding.value.includes(store.getters.user.role)) {
                el.style.display = "none";
            } else {
                el.style.display = "block";
            }
        } else {
            el.style.display = "none";
        }
        
    }
});