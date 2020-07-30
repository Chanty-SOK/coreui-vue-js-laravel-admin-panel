<template>
  <CCard>
    <CCardHeader>
      <slot name="header">
        <CIcon name="cil-grid" />User List
      </slot>
    </CCardHeader>
    <CCardBody>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col">Registered At</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <th scope="row">1</th>
            <td>{{ item.username }}</td>
            <td>{{ item.regsitered }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </CCardBody>
  </CCard>
</template>

<script>
import { CCard, CCardHeader, CIcon, CCardBody } from "@coreui/vue";
export default {
  name: "List",
  components: {
    CCard,
    CIcon,
    CCardBody,
    CCardHeader,
  },
  data() {
    return {
      items: [],
      id: "",
      role: "",
      status: "",
      username: "",
      regsitered: "",
    };
  },
  created() {
    this.items = [
      {
        id: 1,
        username: "Boos",
        regsitered: "2020-09-08",
        role: "admin",
        status: "Active",
      },
      {
        id: 2,
        username: "LOL",
        regsitered: "2020-09-08",
        role: "admin",
        status: "Inactive",
      },
    ];
  },
};
</script>