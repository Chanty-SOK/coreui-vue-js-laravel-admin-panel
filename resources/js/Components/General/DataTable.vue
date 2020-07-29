<template>
  <div>
    <CDataTable
      :column-filter="getColumnFilterConfig"
      :items="getItemData"
      :fields="fieldsDataTable"
      :table-filter="getFilterConfigure"
      :tableFilterValue.sync="configure.query"
      :items-per-page-select="getFilterItemConfigure"
      hover
      sorter
      :itemsPerPage="configure.perPage"
      v-on:pages-change="pageChange"
      v-on:pagination-change="paginationChange"
      v-on:update:sorter-value="sort"
      v-on:update:table-filter-value="filter"
    >
      <template #updated_at-filter="{item}">
        From:
        <input type="date" @change="setDateFilter" class="mr-2" />
        To:
        <input type="date" @change="e => setDateFilter(e, 'end')" />
      </template>
      <template #updated_at="{item}">{{ item.updated_at}}</template>
      <template v-for="(field)  in getSlot" v-slot:[field.key]="{item, index}">
        <slot :name="field.key" v-bind:item="item" v-bind:index="index" />
      </template>
      <template #no-items-view>
        <div class="text-center my-5">
          <h2>
            <h1>{{$t('common.no_result')}}</h1>
            <CIcon width="30" name="cil-ban" class="text-danger mb-2" />
          </h2>
        </div>
      </template>
      <template #over-table>
        <div style="margin-bottom:10px;">
          <slot name="over-table" />
        </div>
        <div class="clearfix"></div>
      </template>
    </CDataTable>
    <CPagination
      v-show="(configure.totalPage != 1) && (fieldData)"
      :activePage.sync="configure.page"
      :pages="configure.totalPage"
      align="center"
      v-on:update:activePage="activePage"
    />
  </div>
</template>
<script>
import http from "../../Helper/Http";
import { CDataTable, CPagination, CIcon } from "@coreui/vue";
export default {
  name: "tables",
  props: {
    fieldsDataTable: Array,
    link: String,
    selectItemPerPage: {
      type: Boolean,
      default: true,
    },
    search: {
      type: Boolean,
      default: true,
    },
    fieldData: {
      type: Boolean,
      default: true,
    },
    columnFilter: {
      type: Boolean,
      default: false,
    },
  },
  components: { CDataTable, CPagination, CIcon },
  computed: {
    getSlot() {
      return this.fieldsDataTable.filter(
        (field) => this.$scopedSlots[field.key]
      );
    },
    getFilterConfigure() {
      if (this.search) {
        return {
          label: this.$t("common.search"),
          placeholder: this.$t("common.search_value_placeholder"),
        };
      } else {
        return false;
      }
    },
    getFilterItemConfigure() {
      if (this.selectItemPerPage) {
        return { label: this.$t("common.items_per_page") };
      } else {
        return false;
      }
    },
    getColumnFilterConfig() {
      if (this.columnFilter) {
        return true;
      }
      return false;
    },
    configure: {
      get() {
        if (this.$store.state.DataTable.configures[this.$route.path]) {
          return { ...this.$store.getters.getConfigure(this.$route.path) };
        }
        this.$store.commit("setInit", {
          routeUrl: this.$route.path,
          configure: {
            page: 1,
            totalPage: null,
            perPage: 10,
            totalItems: null,
            sortColumn: "id",
            orderBy: "desc",
            query: "",
            selectionPerPage: {
              values: [10, 25, 50, 100, 250, 500],
            },
          },
        });
        return { ...this.$store.state.DataTable.configures[this.$route.path] };
      },
      set() {
        return;
      },
    },
    getItemData() {
      if (this.startDate == null && this.endDate == null) {
        return this.items;
      }
      return this.items.filter((item) => {
        let date = item.updated_at_timestamp;
        return date >= this.startDate && date <= this.endDate;
      });
    },
  },
  data() {
    return {
      items: [],
      details: [],
      startDate: null,
      endDate: null,
    };
  },
  created() {},
  watch: {
    // call again the method if the route changes
    $route: "getItem",
  },
  mounted() {
    this.getItem();
  },
  methods: {
    setDateFilter(e, end) {
      if (end) {
        this.endDate = ~~(new Date(e.target.value) / 1000);
      } else {
        this.startDate = ~~(new Date(e.target.value) / 1000);
      }
    },
    pageChange(value) {
      let payload = {
        routeUrl: this.$route.path,
        configure: this.configure,
      };
      this.$store.commit("setConfigure", payload);
    },
    paginationChange(value) {
      this.configure.perPage = value;
      this.getItem();
    },
    getItem() {
      let params = new URLSearchParams(this.link);
      let queryString = "?";
      if (/[?&]*=/.test(this.link)) {
        queryString = "&";
      }
      let link =
        this.link +
        queryString +
        "perPage=" +
        this.configure.perPage +
        "&page=" +
        this.configure.page;
      if (this.configure.sortColumn && this.configure.orderBy) {
        link =
          link +
          "&sort=" +
          this.configure.sortColumn +
          "&orderBy=" +
          this.configure.orderBy;
      }
      if (this.configure.query != "") {
        link = link + "&searchText=" + this.configure.query;
      }
      if (!this.fieldData) {
        this.$chttp.get(link).then((response) => {
          this.items = response.data.data.data_relation;
        });
      } else {
        this.$chttp.get(link).then((response) => {
          this.items = response.data.data;
          this.configure.totalItems = response.data.meta.total;
          this.configure.totalPage = response.data.meta.last_page;
        });
      }
      let payload = {
        routeUrl: this.$route.path,
        configure: this.configure,
      };
      this.$store.commit("setConfigure", payload);
    },
    activePage(value) {
      this.configure.page = value;
      this.getItem();
    },
    sort(value) {
      if (this.configure.sortColumn && this.configure.orderBy) {
        this.configure.sortColumn = value.column;
        this.configure.orderBy = value.asc ? "ASC" : "DESC";
        this.getItem();
      }
    },
    filter(value) {
      this.configure.query = value;
      this.getItem();
    },
  },
};
</script>