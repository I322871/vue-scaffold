<template>
  <v-container
    id="container"
    class="ml-0"
  >
    <v-row no-gutters>
      <v-col>
        <v-card
          max-width="344"
          outlined
          dark
          color="primary"
          class="ml-4 mt-4"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="subtitle-2 mb-4">
                primary
              </div>
              <v-list-item-title class="headline mb-1">
                #1976D2
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          max-width="344"
          outlined
          dark
          color="accent"
          class="ml-4 mt-4"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="subtitle-2 mb-4">
                accent
              </div>
              <v-list-item-title class="headline mb-1">
                #82B1FF
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          max-width="344"
          outlined
          dark
          color="info"
          class="ml-4 mt-4"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="subtitle-2 mb-4">
                info
              </div>
              <v-list-item-title class="headline mb-1">
                #2196F3
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          max-width="344"
          outlined
          dark
          color="warning"
          class="ml-4 mt-4"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="subtitle-2 mb-4">
                warning
              </div>
              <v-list-item-title class="headline mb-1">
                #FFC107
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          max-width="344"
          outlined
          dark
          color="secondary"
          class="ml-4 mt-4"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="subtitle-2 mb-4">
                secondary
              </div>
              <v-list-item-title class="headline mb-1">
                #424242
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          max-width="344"
          outlined
          dark
          color="error"
          class="ml-4 mt-4"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="subtitle-2 mb-4">
                error
              </div>
              <v-list-item-title class="headline mb-1">
                #FF5252
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          max-width="344"
          outlined
          dark
          color="success"
          class="ml-4 mt-4"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="subtitle-2 mb-4">
                success
              </div>
              <v-list-item-title class="headline mb-1">
                #4CAF50
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ThemeColor"
};
</script>

<style>
#container {
  max-width: 700px !important;
}
</style>