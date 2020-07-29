<template>
  <CContainer class="align-items-center min-vh-100" style="padding-top: 10%;">
    <CRow class="justify-content-center">
      <CCol sm="7">
        <CCard class="p-4">
          <CForm>
            <h1>{{$t('common.login')}}</h1>
            <p class="text-muted">{{$t('common.sign_in_to_your_account')}}</p>
            <CInput
              v-model="username"
              type="text"
              :placeholder="[[$t('common.user_name')]]"
              autocomplete="username email"
            ></CInput>
            <CInput
              v-model="password"
              type="password"
              :placeholder="[[$t('common.password')]]"
              autocomplete="curent-password"
            ></CInput>
            <CRow class="w-100 justify-content-center">
              <CButton
                color="primary"
                class="px-4 text-right"
                variant="outline"
                v-on:click="login()"
              >{{$t('common.login')}}</CButton>
            </CRow>
          </CForm>
        </CCard>
      </CCol>
    </CRow>

    <CRow class="justify-content-center"></CRow>
    <CElementCover :opacity="0.9" v-show="isLoading">
      <CSpinner color="info" />
    </CElementCover>
  </CContainer>
</template>
<style scoped>
.logoWrap {
  text-align: center;
}
.logo {
  width: 12rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
<script>
import Vue from "vue";
import {
  CForm,
  CContainer,
  CRow,
  CButton,
  CCol,
  CElementCover,
  CSpinner,
  CCard,
  CInput,
} from "@coreui/vue";
import http from "../Helper/Http";
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  components: {
    CForm,
    CContainer,
    CRow,
    CButton,
    CCol,
    CElementCover,
    CSpinner,
    CCard,
    CInput,
  },
  mounted() {
    // console.log('Component mounted.')
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
    login() {
      this.$store.commit("setLoading", true);
      this.$store
        .dispatch("login", { username: this.username, password: this.password })
        .then((response) => {
          this.$store.dispatch("getUser");
          this.$router.push({
            path: "/",
          });
        });
    },
  },
};
</script>
