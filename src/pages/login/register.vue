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
          <v-form @submit.prevent="register">
            <v-text-field
              outlined
              label="Name"
              name="name"
              type="text"
              v-model="regisData.name"
            ></v-text-field>
            <v-text-field
              outlined
              label="Email"
              name="email"
              type="email"
              v-model="regisData.email"
            ></v-text-field>
            <v-text-field
              outlined
              id="password"
              label="Password"
              name="password"
              type="password"
              v-model="regisData.password"
            ></v-text-field>
            <v-text-field
              outlined
              id="confPassword"
              label="Confirm Password"
              name="confPassword"
              type="password"
              v-model="regisData.password_confirmation"
            ></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" type="submit" block lg>
                Register
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
        <v-layout justify-center>
          <a href="/login">
            Already have account? Login here
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
    regisData: {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
  }),
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async register() {
      let credentials = this.regisData;
      console.log('here')
      let res = await this.$store.dispatch('register', credentials);
      console.log(res);
      console.log(this.user);
    }
  }
};
</script>
