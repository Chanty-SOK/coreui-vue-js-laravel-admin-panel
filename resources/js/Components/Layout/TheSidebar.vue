<template>
  <CSidebar :minimize="minimize" :show.sync="show" fixed>
    <CSidebarBrand class="c-sidebar-logo">
      <img src="/images/logo.png" class="responsive" />
      <img src="/images/logo-minimized.png" class="c-sidebar-brand-minimized" />
    </CSidebarBrand>

    <CSidebarNav>
      <CSidebarNavTitle>Boiler Plat Admin</CSidebarNavTitle>
      <CSidebarNavItem name="User Mangement" to="/admin/user" icon="cil-contact" />
    </CSidebarNav>
    <CSidebarMinimizer class="d-md-down-none" @click.native="minimize = !minimize" />
  </CSidebar>
</template>

<script>
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNavTitle,
  CSidebarNav,
  CSidebarNavItem,
  CSidebarMinimizer,
  CLink,
  props as linkProps,
  CSidebarNavDropdown,
} from "@coreui/vue";
import CSidebarNavItemAF from "../General/CSidebarNavItemAF";
import { HasPermission } from "../../Directives/Security";
export default {
  name: "TheSidebar",
  computed: {},
  data() {
    return {
      minimize: false,
      show: "responsive",
    };
  },
  components: {
    CSidebar,
    CSidebarNavTitle,
    CSidebarBrand,
    CSidebarNav,
    CSidebarNavItem,
    CSidebarMinimizer,
    CLink,
    CSidebarNavItemAF,
    CSidebarNavDropdown,
  },
  beforeCreate() {},
  mounted() {
    this.$root.$on("toggle-sidebar", () => {
      const sidebarOpened = this.show === true || this.show === "responsive";
      this.show = sidebarOpened ? false : "responsive";
    });
    this.$root.$on("toggle-sidebar-mobile", () => {
      const sidebarClosed = this.show === "responsive" || this.show === false;
      this.show = sidebarClosed ? true : "responsive";
    });
  },
};
</script>
