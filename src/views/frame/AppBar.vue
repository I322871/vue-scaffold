<template>
  <v-app-bar
    id="app-bar"
    absolute
    color="white"
    app
  >
    <v-app-bar-nav-icon @click="setDrawer(!drawer)" />

    <v-spacer />

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template #activator="{ attrs, on }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-badge
            color="red"
            overlap
          >
            <template #badge>
              <span>5</span>
            </template>
            <v-icon> mdi-bell </v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in notifications"
          :key="index"
          @click="test"
        >
          <v-list-item-title> {{ item }} </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template #activator="{ attrs, on }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon> mdi-web </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item) in languages"
          :key="item.code"
          @click="$i18n.locale = item.code"
        >
          <v-list-item-title> {{ item.text }} </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template #activator="{ attrs, on }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon> mdi-account </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="test">
          <v-icon class="mr-2">
            mdi-account
          </v-icon>
          <v-list-item-title> {{ $t('personalInfo') }} </v-list-item-title>
        </v-list-item>
        <v-list-item @click="test">
          <v-icon class="mr-2">
            mdi-lock-question
          </v-icon>
          <v-list-item-title> {{ $t('changePassword') }} </v-list-item-title>
        </v-list-item>

        <v-divider />

        <v-list-item @click="logout">
          <v-icon class="mr-2">
            mdi-power
          </v-icon>
          <v-list-item-title> {{ $t('logout') }} </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "DashboardCoreAppBar",
  data() {
    return {
      notifications: [
        "Mike John Responded to your email",
        "You have 5 new tasks",
        "You're now friends with Andrew",
        "Another Notification",
        "Another one",
      ],
      languages: [{
        text: "English",
        code: "en"
      }, {
        text: "简体中文",
        code: "cn"
      }],
    };
  },
  computed: {
    ...mapState(["drawer"]),
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
    test() {
    },
    logout() {
      this.$router.replace({
        name: "LOGIN"
      });
    }
  }
};
</script>
