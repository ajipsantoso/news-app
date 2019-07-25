<template>
  <v-layout wrap>
    <v-flex d-flex xs12 sm8 pr-8>
      <v-layout fill-height>
        <v-carousel :show-arrows="false" height="100%">
        <v-carousel-item v-for="(item, i) in allNews.slice(0,3)" :src="item.image_url" :key="i">
          <!-- <v-sheet height="100%" tile> -->
            <v-layout align-end fill-height justify-center pb-12 class="containerCar">
              <v-flex class="title white--text" pa-4>
                {{item.title}}
              </v-flex>
            </v-layout>
          <!-- </v-sheet> -->
        </v-carousel-item>
      </v-carousel>
      </v-layout>
      
    </v-flex>
    <!-- <v-spacer /> -->
    <!-- <v-flex xs12 sm4>
      <v-layout column>
        <v-flex class="headline titleBar">
          <v-layout mb-2>
            TRENDING NEWS
          </v-layout>
        </v-flex>
        <template v-for="(item, idx) in allNews.slice(0,4)">
          <v-flex :key="idx" @click="newsDetail(item.id)">
            <v-layout>
              <v-flex shrink my-4>
                <v-img
                  height="100"
                  width="100"
                  :src=" item.image_url "
                ></v-img>
              </v-flex>
              <v-flex pa-3>
                <div class="topic">
                  {{ item.user.name }}
                </div>
                <div class="title">
                  {{ `${item.title.substring(0, 30)}....` }}
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </template>
      </v-layout>
    </v-flex> -->
    <side-bar :allNews="allNews" />
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex';
import sideBar from '../../layout/sidebar';

export default {
  components: {
    sideBar
  },
  data: () => ({
    items: [
      { title: 'coba', topic: 'test', image: '' },
      { title: 'coba', topic: 'test', image: '' }
    ],
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange']
  }),
  computed: {
    ...mapGetters(['allNews'])
  },
  methods: {
    newsDetail(id) {
      this.$router.push({path:`/news/${id}`});
    },
  },
  async created() {
    await this.$store.dispatch('allNewsGet', {});
  }
};
</script>
<style>
.titleBar {
  border-bottom: 3px solid #60b7ff;
}
.containerCar{
  background: #00000056;
}
</style>
