<template>
  <v-app>
    <navbar />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <footeer app/>
  </v-app>
</template>
<script>
import Navbar from './navbar';
import footeer from './footer';

export default {
  components: {
    Navbar,
    footeer
  }
};
</script>
