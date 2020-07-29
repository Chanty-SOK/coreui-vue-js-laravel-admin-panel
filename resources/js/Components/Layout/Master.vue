<template>
  <div class="c-app">
    <TheSidebar/>
    <div class="c-wrapper">
      <TheHeader/>
      <div class="c-body">
        
        <transition name="fade"> 
          <main class="c-main">
            <CContainer fluid>
                <router-view ></router-view>
            </CContainer>
          </main>
        </transition>
      </div>
      <TheFooter/>
    </div>
    <div v-show="isLoading" class="c-loading">
      <div class="loading-block d-flex justify-content-between align-items-center">
        <CSpinner color="white"/>  <span class="c-loading__loading-text">{{$t('common.loading')}}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
<script>
import { FadeTransition } from "vue2-transitions";
import TheSidebar from './TheSidebar';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';
import {CContainer, CElementCover, CSpinner} from '@coreui/vue';

export default {
  components: {
    FadeTransition,
    TheSidebar,
    TheHeader,
    TheFooter,
    CContainer,
    CElementCover, CSpinner
  },
  beforeCreate() {
  },
  computed:  {
    isLoading() {
      return this.$store.state.isLoading;
    } 
  }
};
</script>
