<template>
  <v-layout>
    <v-container>
      <trendingNews class="mb-10" />
      <latestNews />
    </v-container>
  </v-layout>
</template>
<script>
// import { mapGetters } from 'vuex';
import TrendingNews from './Trending';
import LatestNews from './LatestNews';

export default {
  components: {
    TrendingNews,
    LatestNews
  },
  data: () => ({})
};
</script>
