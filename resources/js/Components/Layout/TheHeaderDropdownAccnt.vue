<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <font-awesome-icon style="font-size: 36px;" :icon="['fas', 'user-circle']"/>
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>{{$t('common.account')}}</strong>
    </CDropdownHeader>
    <CDropdownItem to="/admin/profile">
      <CIcon name="cil-user" /> {{$t('common.profile')}}
    </CDropdownItem>
    <CDropdownItem v-on:click="logout()">
      <CIcon name="cil-lock-locked" /> {{$t('common.logout')}}
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import {CDropdown, CHeaderNavLink, CDropdownHeader, CDropdownItem, CIcon} from '@coreui/vue';
import { library } from '@fortawesome/fontawesome-svg-core';
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42
    }
  }, 
  components: {CDropdown, CHeaderNavLink, CDropdownHeader, CDropdownItem, CIcon}, 
  methods: {
    logout: function() {
      this.$store.dispatch('logout').then((response) => {
        this.$router.push({name: 'login'});  
      });
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>