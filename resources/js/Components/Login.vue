<template>
  <CContainer class="align-items-center min-vh-100" style="padding-top: 10%;">
    <CRow class="justify-content-center">
      <CCol sm="7">
        <CCard class="p-4">
          <CForm>
            <h1>Login</h1>
            <p class="text-muted">Welcome Back</p>
            <CInput
              v-model="username"
              type="text"
              placeholder="Input your Username..."
              autocomplete="username email"
            ></CInput>
            <CInput
              v-model="password"
              type="password"
              placeholder="Input your password..."
              autocomplete="curent-password"
            ></CInput>
            <CRow class="w-100 justify-content-center">
              <CButton
                color="primary"
                class="px-4 text-right"
                variant="outline"
                v-on:click="login()"
              >Login</CButton>
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
      // this.$store.commit("setLoading", true);
      // this.$store
      //   .dispatch("login", { username: this.username, password: this.password })
      //   .then((response) => {
      //     this.$store.dispatch("getUser");
      this.$router.push({ name: "master" });
      // });
    },
  },
};
</script>
