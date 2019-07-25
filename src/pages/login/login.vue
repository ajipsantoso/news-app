<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12 pa-6">
        <v-layout
          align-center
          justify-center
          class="logo-wrapper mb-5 pa-5 display-1 font-weight-medium"
        >
          <span class="blue--text lighten-1 mr-1 ">GITS </span>
          <span class="orange--text lighten-1">NEWS</span>
        </v-layout>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field
              outlined
              label="Email"
              name="login"
              type="email"
              v-model="loginData.email"
            ></v-text-field>
            <v-text-field
              outlined
              id="password"
              label="Password"
              name="password"
              type="password"
              v-model="loginData.password"
            ></v-text-field>
            <v-layout wrap>
              <v-flex>
                <v-checkbox v-model="loginData.remember_me" class="pt-0 mt-0" label="Remember Me" />
                {{loginData.remember_me}}
              </v-flex>
              <v-flex>
                <v-layout justify-end>
                  <a>
                    Forget Password?
                  </a>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" type="submit" block lg>
                Login
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
        <v-layout justify-center>
          <a href="/register">
            Don't have account? Register here
          </a>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    loginData: {
      email: '',
      password: '',
      remember_me: null,
    },
  }),
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async login() {
      let credentials = this.loginData;
      console.log('here')
      if (credentials['remember_me']) {
        credentials['remember_me'] = 1;
      }
      else delete credentials['remember_me']; 
      let res = await this.$store.dispatch('login', credentials);
      console.log(res);
      if (res) {
        this.$router.push('/')
      }
      else {

      }
    }
  }
};
</script>
