<template>
    <CHeader fixed with-subheader light>
        <CToggler
            in-header
            class="ml-3 d-lg-none"
            v-c-emit-root-event:toggle-sidebar-mobile
        />
        <CToggler
            in-header
            class="ml-3 d-md-down-none"
            v-c-emit-root-event:toggle-sidebar
        />
        <CHeaderNav class="d-md-down-none mr-auto">
            <!-- <CHeaderNavItem class="px-3">
                <CHeaderNavLink to="/">
                    Dashboard
                </CHeaderNavLink>
            </CHeaderNavItem> -->
        </CHeaderNav>
        <CHeaderNav class="mr-4">
            <!-- <CHeaderNavItem class="d-md-down-none mx-2">
                <CHeaderNavLink>
                    <CIcon name="cif-us" />
                </CHeaderNavLink>
            </CHeaderNavItem> -->
            <TheHeaderDropdownAccnt />
        </CHeaderNav>
    </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";
import {CHeader, CToggler,CHeaderBrand, CHeaderNav, CHeaderNavItem, 
    CHeaderNavLink, CIcon, CSubheader, CBreadcrumbRouter, CEmitRootEvent} from '@coreui/vue';

export default {
    name: "TheHeader",
    components: {
        TheHeaderDropdownAccnt,
        CHeader, CToggler,CHeaderBrand, CHeaderNav, CHeaderNavItem, CHeaderNavLink, 
        CIcon, CSubheader, CBreadcrumbRouter
    },
    directives: {
        'c-emit-root-event': CEmitRootEvent
    }
};
</script>
