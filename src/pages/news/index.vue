<template>
  <v-layout>
    <v-flex d-flex xs12 sm8 pr-8>
      <v-layout fill-height column>
        <v-flex>
          <v-flex class="subtitle">{{ news.created_at }}</v-flex>
          <v-flex class="title">{{ news.title }}</v-flex>
        </v-flex>
        <v-flex>
          <v-img
            src="https://picsum.photos/id/11/500/300"
            lazy-src="https://picsum.photos/id/11/10/6"
            aspect-ratio="1"
            class="grey lighten-2"
            max-height="500"
          ></v-img>
        </v-flex>
        <v-flex>
          {{news.body}}
        </v-flex>
      </v-layout>
    </v-flex>
      <sidebar />
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import sidebar from '../../layout/sidebar'

export default {
  components: {
    sidebar,
  },
  computed: {
    news:{
      // get: function () {
      //   let data = this.$store.getters.news
      //   data.created_at = new Date().
      //   return data
      // },
      // setter
    }
    
  },
  async created() {
    // console.log(this.$route.params.id)
    this.$store.dispatch('newsById', this.$route.params.id);
  }
}
</script>
