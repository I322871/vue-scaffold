<template>
  <div>
    <v-toolbar
      dark
      src="../../assets/appBarBlank.jpg">
      <template v-slot:img="{ props }">
        <v-img
          gradient="to top, rgba(25, 118, 210, 1), rgba(13, 59, 105, 1)"
          v-bind="props"/>
      </template>
      <v-toolbar-title>{{ $t('myTasks') }}</v-toolbar-title>
      <v-spacer/>
      <v-btn
        text
        @click="filterDialog = true">
        <v-icon left>mdi-filter-outline</v-icon>
        {{ $t('filter') }}
      </v-btn>
    </v-toolbar>
    <v-data-table
      fixed-header
      hide-default-footer
      :height='tableHeight'
      mobile-breakpoint=0
      disable-filtering
      disable-pagination
      disable-sort
      :loading="loading"
      show-expand
      single-expand
      :no-data-text="$t('noData')"
      :headers="headers"
      :items="items"
      item-key="_id">
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <div class="row">
              <div class="col-6">
                <v-input
                  :messages="item._id"
                  label="ID"
                  readonly/>
              </div>
              <div class="col-3">
                <v-input
                  :messages="item.age + ''"
                  label="Age"
                  readonly/>
              </div>
              <div class="col-3">
                <v-input
                  :messages="item.job"
                  label="Job"
                  readonly/>
              </div>
          </div>
        </td>
      </template>
      <template v-slot:body.append="{ headers }">
        <tr>
          <td :colspan="headers.length">
            <infinite-loading
              @infinite="getUsers"
              spinner="spiral"
              :identifier="infiniteId"/>
          </td>
        </tr>
      </template>
    </v-data-table>
    <v-dialog v-model="filterDialog">
      <v-card>
        <v-card-title>
          <span> {{ $t('filter') }} </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Username"
                  v-model="filter.username"/>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Department"
                  v-model="filter.department"/>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="onClearFilter">{{ $t('clear') }}</v-btn>
          <v-btn color="blue darken-1" text @click="onFilter">{{ $t('ok') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    data () {
      return {
        headers: [{
          text: 'Username',
          value: 'username',
        }, {
          text: 'Name',
          value: 'name',
        }, {
          text: 'Department',
          value: 'department'
        }, {
          text: '',
          value: 'data-table-expand',
        }],
        items: [],
        tableHeight: window.innerHeight - 112,
        loading: false,
        loadedCount: 0,
        totalCount: 0,
        filterDialog: false,
        infiniteId: 0,
        filter: {
          username: '',
          department: ''
        }
      }
    },
    methods: {
      getUsers ($state) {
        var that = this;
        this.loading = true;

        var params = {
          limit: 20
        };
        this.loadedCount && (params.skip = this.loadedCount);
        this.filter.username && (params.username = this.filter.username);
        this.filter.department && (params.department = this.filter.department);

        this.$axios.get('api/user', { params }).then((response) => {
            that.totalCount = parseInt(response.headers.count);
            that.items.push(...response.data);
            that.loadedCount += response.data.length;
            that.loading = false;
            if ($state) {
              if (that.totalCount === that.loadedCount) {
                if (that.totalCount) {
                  $state.loaded();
                }
                $state.complete();
              } else {
                $state.loaded();
              }
            }
          }).catch((error) => {
          })
      },
      onFilter () {
        this.totalCount = 0;
        this.loadedCount = 0;
        this.items = [];
        this.filterDialog = false;
        this.infiniteId++;
      },
      onClearFilter () {
        this.filter.username = '';
        this.filter.department = '';
      }
    }
  }
</script>

<style lang="sass">
.v-data-table > .v-data-table__wrapper > table > thead > tr > th
  font-size: 13px
</style>