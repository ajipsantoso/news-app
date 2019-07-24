<template>
  <v-layout>
    <v-flex xs12 sm8>
      <v-carousel :show-arrows="false">
        <v-carousel-item
          v-for="(color,i) in colors"
          :key="i"
        >
          <v-sheet
            :color="color"
            height="100%"
            tile
          >
            <v-layout
              align-center
              fill-height
              justify-center
            >
              <div class="display-3">Slide {{ i + 1 }}</div>
            </v-layout>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-flex xs12 sm4>
      <v-layout column>
        <template v-for="(item, idx) in items">
          <v-flex :key="idx">
            <v-layout column>
              <v-flex shrink>
                <v-img
                  height="100"
                  width="100"
                  src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                ></v-img>
              </v-flex>
              <v-flex>
                <div class="topic">
                  {{ item }}
                </div>
                <div class="title">
                  {{ item }}
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </template>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    items:[],
    colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
  }),
}
</script>
