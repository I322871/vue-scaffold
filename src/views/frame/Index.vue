<template>
  <v-app>
    <app-bar />
    <drawer />
    <container />
  </v-app>
</template>

<script>
export default {
  name: "Frame",
  components: {
    AppBar: () => import("./AppBar"),
    Drawer: () => import("./Drawer"),
    Container: () => import("./Container")
  }
};
</script>
