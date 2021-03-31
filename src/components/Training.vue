<template>
<div class="d-flex justify-content-center" style="width: 18rem;">
  <img class="card-img-top" :src="training.img" :alt="training.title" v-if="training.img">
  <div class="card-body">
    <h5 class="card-title">{{training.title}}</h5>
    <p class="card-text" v-if="subtitle">{{training.subtitle}}</p>
    <router-link class="btn btn-outline-primary" :to="'/training/' + training.id">
      Ler Artigo
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>
