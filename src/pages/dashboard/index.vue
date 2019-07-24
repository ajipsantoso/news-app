<template>
  <v-layout>
    <v-container>
      <trendingNews />
      <v-layout>
        <!-- {{allNews}} -->
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex';
import TrendingNews from './Trending';

export default {
  components: {
    TrendingNews,
  },
  data: () => ({
    news: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],
  }),
  computed: {
    ...mapGetters(['allNews']),
  },
  async created() {
    await this.$store.dispatch('allNewsGet',{})
    console.log(this.allNews)
  },
  mounted() {
    
  }
};
</script>
