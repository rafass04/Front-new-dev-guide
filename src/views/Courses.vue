<template>
  <div class="text-center">
    <div class="d-flex justify-content-center" style="width: 39rem">
      <CardsCourses class="m-3" v-for="item in courses" :key="item.id" :course="item"/>
    </div>
  </div>
</template>

<script>
import CardsCourses from '@/components/CardsCourses.vue';

export default {
  name: 'Home',
  components: {
    CardsCourses,
  },

  data() {
    return {
      courses: [
        {
          id: 1,
          title: 'Curso1',
          author: 'Joaozinho',
        },
        {
          id: 2,
          title: 'Curso2',
          author: 'Mariazinha',
        },
      ],
    };
  },
};
</script>
