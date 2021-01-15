<template>
  <v-app>
    <v-content>
      <v-container id="login">
        <p class="mt-15 text-h4 text-center font-weight-bold">
          {{ $t('appName') }}
        </p>
        <v-row justify="center">
          <v-col
            cols="12"
            md="3"
          >
            <v-form class="ma-9">
              <v-text-field
                v-model.trim="username.value"
                :label="$t(&quot;username&quot;)"
                autofocus
                :error-messages="username.invalid ? (username.blankError ? $t(&quot;cannotBeBlankMsg&quot;) : $t(&quot;loginFailMsg&quot;)) : &quot;&quot;"
              />
              <v-text-field
                v-model.trim="password.value"
                :label="$t(&quot;password&quot;)"
                :type="password.visible ? 'text' : 'password'"
                :append-icon="password.visible ? 'mdi-eye' : 'mdi-eye-off'"
                :error-messages="password.invalid ? (password.blankError ? $t(&quot;cannotBeBlankMsg&quot;) : $t(&quot;loginFailMsg&quot;)) : &quot;&quot;"
                @click:append="password.visible = !password.visible"
                @change="submit"
              />
              <v-btn
                color="primary"
                block
                class="mt-9"
                @click="submit"
              >
                {{ $t('login') }}
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-overlay v-model="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      />
    </v-overlay>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: {
        value: "",
        blankError: true,
        invalid: false
      },
      password: {
        value: "",
        visible: false,
        blankError: true,
        invalid: false
      },
      overlay: false
    };
  },
  methods: {
    submit: function () {
      this.username.invalid = !this.username.value;
      this.username.blankError = !this.username.value;
      this.password.invalid = !this.password.value;
      this.password.blankError = !this.password.value;
      if (this.username.invalid || this.password.invalid) {
        return;
      }

      var that = this;
      this.overlay = true;
      this.$axios.post("/auth", {}, {
        auth: {
          username: this.username.value,
          password: this.password.value
        }
      }).then(response => {
        that.overlay = false;
        if (response && response.status === 201) {
          that.$cookies.set("lk_space_token", response.data.token);
          that.$router.replace({
            name: "THEME_COLOR"
          });
        } else {
          that.username.invalid = true;
          that.username.blankError = false;
          that.password.invalid = true;
          that.password.blankError = false;
        }
      }).catch(() => {
        that.username.invalid = true;
        that.username.blankError = false;
        that.password.invalid = true;
        that.password.blankError = false;
      });
    }
  }
};
</script>
