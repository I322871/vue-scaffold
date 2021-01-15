<template>
  <v-navigation-drawer
    id="drawer"
    ref="drawer"
    v-model="showDrawer"
    :mini-variant="miniDrawer"
    app
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="../../assets/logo.png" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="title font-weight-black">
          {{ $t('appName') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list
      expand
      nav
    >
      <v-list-item to="/themeColors">
        <v-list-item-icon>
          <v-icon> mdi-palette </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> {{ $t('themeColor') }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",

  data() {
    return {
    };
  },

  computed: {
    showDrawer: {
      get() {
        return !this.$vuetify.breakpoint.mobile || this.$store.state.drawer;
      },
      set(val) {
        this.$vuetify.breakpoint.mobile && this.$store.commit("SET_DRAWER", val);
      },
    },

    miniDrawer: function () {
      return !this.$vuetify.breakpoint.mobile && !this.$store.state.drawer;
    }
  }
};
</script>
