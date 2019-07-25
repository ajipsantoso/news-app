<template>
    <v-flex xs12 sm4>
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
    </v-flex>
</template>
<script>
export default {
  props: ['allNews'],
  methods: {
    newsDetail(id) {
      this.$router.push({path:`/news/${id}`});
    },
  },
}
</script>

