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
import Tools from '@/components/Tools.vue';
import Training from '@/components/Training.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    Cards,
    Tools,
    Training,
  },

  data() {
    return {
      articles: [
        { id: 1, title: 'Guia iniciante' },
        {
          id: 2,
          title: 'Diferença entre Machine Learning e Inteligência Artificial',
          subtitle: null,
          article: 'Diferenças do futuro <b>qualquer coisa</b>',
          img: null,
        },
      ],
    };
  },
};
</script>
