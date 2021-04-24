<template>
  <div class="text-center">
    <Carousel/>
    <div class="d-flex justify-content-center" style="width: 39rem">
      <Cards class="m-3" v-for="item in articles" :key="item.id" :article="item"/>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Cards from '@/components/Cards.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    Cards,
  },

  computed: {
    articles() {
      return this.$store.state.articles;
    },
  },
  created() {
    this.$store.dispatch('getArticles');
  },
};
</script>
