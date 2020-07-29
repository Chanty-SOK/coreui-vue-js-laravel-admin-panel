<template>
    <li class="c-sidebar-nav-item">
        <CLink :to="to" class="c-sidebar-nav-link" activeClass="c-active">
            <div class="c-sidebar-nav-icon">
            <font-awesome-icon :icon="icons" style="top: -4px; position: relative;"/>
            </div>
            <slot></slot>
            {{$t(label)}}
        </CLink>
    </li>
</template>

<script>
import {CLink} from '@coreui/vue';
import { library } from '@fortawesome/fontawesome-svg-core';
export default {
  name: 'CSidebarNavItemAf',
  computed: {
  }, 
  data () {
    return {
      minimize: true,
      show: 'responsive'
    }
  },
  components: {CLink},
  props: {
      to: String,
      label: String,
      icons: Array
  }
}
</script>
