<template>
  <CSidebar
    :minimize="minimize"
    :show.sync="show"
    fixed
  >
    <CSidebarBrand class="c-sidebar-logo">
      <img src="/images/logo.png" class="c-sidebar-brand-full"/>
      <img src="/images/logo-minimized.png" class="c-sidebar-brand-minimized"/>
    </CSidebarBrand>
    
      <CSidebarNav>

        <CSidebarNavTitle>
          {{$t('sidebar.main_navigation')}}
        </CSidebarNavTitle>
        <CSidebarNavDropdown v-has-permission="['Admin', 'Age Reviewer']" :name="$t('sidebar.age_verification.title')" icon="cil-people">
          
          <CSidebarNavItemAF to="/admin/age-verification/reviewing" :icons="['fas', 'address-card']">
            {{$t('age_verification.browser')}} <div class="badge badge-warning">{{$t('sidebar.age_verification.pending')}}</div>
          </CSidebarNavItemAF>
          <CSidebarNavItemAF to="/admin/age-verification/approved" :icons="['fas', 'address-card']">
            {{$t('age_verification.browser')}} <div class="badge badge-success">{{$t('sidebar.age_verification.accepted')}}</div>
          </CSidebarNavItemAF>
          <CSidebarNavItemAF to="/admin/age-verification/rejected" :icons="['fas', 'address-card']">
            {{$t('age_verification.browser')}} <div class="badge badge-danger">{{$t('sidebar.age_verification.rejected')}}</div>
          </CSidebarNavItemAF>
        </CSidebarNavDropdown>
        
        <CSidebarNavItem v-has-permission="['Admin']" :name="$t('sidebar.coupon')" to="/admin/coupon" icon="cil-money" />
        <CSidebarNavItem v-has-permission="['Admin']" :name="$t('sidebar.push_notification')" to="/admin/push-notification" icon="cil-bell" />
        <CSidebarNavItem v-has-permission="['Admin']" :name="$t('sidebar.subscription')" to="/admin/subscription" icon="cil-notes" />
        <CSidebarNavItem v-has-permission="['Admin']" :name="$t('sidebar.request_plan')" to="/admin/request-plan" icon="cil-clipboard" />
        <CSidebarNavItem v-has-permission="['Admin']" :name="$t('sidebar.user_management')" to="/admin/user" icon="cil-contact" />
        <CSidebarNavItem v-has-permission="['Admin']" :name="$t('sidebar.tag')" to="/admin/tag" icon="cil-tags" />
        <CSidebarNavItem v-has-permission="['Admin']" :name="$t('sidebar.version')" to="/admin/version" icon="cil-loop-circular" />
        <CSidebarNavItem v-has-permission="['Admin']" :name="$t('sidebar.user_leave')" to="/admin/user-leave" icon="cil-mood-bad" />
        <CSidebarNavItem v-has-permission="['Admin']" :name="$t('sidebar.report_user')" to="/admin/report-user" icon="cil-warning" />
        
      </CSidebarNav>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="minimize = !minimize"
    />
  </CSidebar>
</template>

<script>
import {CSidebar, CSidebarBrand, CSidebarNavTitle, CSidebarNav, CSidebarNavItem, CSidebarMinimizer, CLink, props as linkProps, CSidebarNavDropdown} from '@coreui/vue';
import CSidebarNavItemAF from '../General/CSidebarNavItemAF';
import { HasPermission } from "../../Directives/Security";
export default {
  name: 'TheSidebar',
  computed: {
  },
  data () {
    return {
      minimize: false,
      show: 'responsive'
    }
  },
  components: {CSidebar, CSidebarNavTitle, CSidebarBrand, CSidebarNav, CSidebarNavItem, CSidebarMinimizer, CLink, CSidebarNavItemAF, CSidebarNavDropdown},
  beforeCreate() {
  },
  mounted () {
    this.$root.$on('toggle-sidebar', () => {
      const sidebarOpened = this.show === true || this.show === 'responsive'
      this.show = sidebarOpened ? false : 'responsive'
    })
    this.$root.$on('toggle-sidebar-mobile', () => {
      const sidebarClosed = this.show === 'responsive' || this.show === false
      this.show = sidebarClosed ? true : 'responsive'
    })
  }
}
</script>
