<template>
  <v-layout column>
    <v-flex xs12>
      <v-layout pb-2 class="headline titleBar">
        <v-flex>
          LATEST NEWS
        </v-flex>
        <v-flex>
          <v-layout justify-end>
            See All
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 v-for="(item, idx) in items" :key="idx">
            hmm
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12>

    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: 'coba', topic: 'test', image: '' },
      { title: 'coba', topic: 'test', image: '' }
    ],
  }),
}
</script>
<style scoped>
.titleBar {
  border-bottom: 3px solid #60b7ff;
}
</style>

