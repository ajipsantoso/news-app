<template>
  <v-app-bar app light :elevation="5">
    <v-toolbar-title>
      <v-img
        alt="Vuetify Logo"
        src="@/assets/logo.png"
        contain
        transition="scale-transition"
        height="40px"
        width="150px"
      />
    </v-toolbar-title>
    <v-toolbar-items>
      <template v-for="(item, idx) in items">
        <v-btn
          class="mx-4"
          width="150px"
          color="primary"
          text
          :key="idx"
          :to="item.to"
          exact-active-class=".activeRoute"
        >
          {{ item.text }}
        </v-btn>
      </template>
      <!-- <v-btn text>Latest News</v-btn>
      <v-btn text>Politics</v-btn>
      <v-btn text>Sport</v-btn>
      <v-btn text>Other</v-btn> -->
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn class="mx-2" small fab dark color="orange">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn class="mx-2" rounded dark color="primary">
      Daftar
    </v-btn>
    <v-btn class="mx-2" rounded outlined color="primary" :to="'/login'">
      Masuk
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { text: `Latest News`, to: `/` },
      { text: `Politics`, to: `/#` },
      { text: `Sport`, to: `/#` },
      { text: `Other`, to: `/#` }
    ]
  })
};
</script>
<style>
.activeRoute {
  border-color: red;
}
</style>
