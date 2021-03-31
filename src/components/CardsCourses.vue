<template>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{course.title}}</h5>
    <h6 class="card-text">Author: {{course.author}}</h6>
    <p class="card-text" v-if="subtitle">{{course.author}}</p>
    <router-link class="btn btn-outline-primary" :to="'/course/' + course.id">
      Ir para curso
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>
