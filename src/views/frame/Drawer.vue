<template>
  <v-navigation-drawer
    id="drawer"
    v-model="drawer"
    dark
    src="../../assets/drawerBg.jpg"
    app>
    <template v-slot:img="props">
      <v-img
        gradient="to top, rgba(25, 118, 210, 1), rgba(0, 0, 0, .8)"
        v-bind="props"/>
    </template>

    <v-divider class="mb-1"/>

    <v-list nav>
      <v-list-item>
        <v-list-item-avatar color="white">
          <v-img src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title> {{ $t('title') }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list
      expand
      nav>
      <v-list-group
        prepend-icon="mdi-calendar-check"
        color="white"
        value="true"
        no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>主项目</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item to="/myTasks">
          <v-list-item-content>
            <v-list-item-title>子项目1</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/admin2">
          <v-list-item-content>
            <v-list-item-title>子项目2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item to="/myCars">
        <v-list-item-icon>
          <v-icon> mdi-car </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> {{ $t('myCars') }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Drawer',
    data () {
      return {
      };
    },
    computed: {
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      }
    }
  }
</script>
