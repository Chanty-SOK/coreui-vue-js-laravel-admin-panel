<template>
    <div id="app">
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  },
  computed:  {
    isLoading() {
      return this.$store.state.isLoading;
    } 
  }

};
</script>
