<template>
<div class="d-flex justify-content-center" style="width: 18rem;">
  <img class="card-img-top" :src="tools.img" :alt="tools.title" v-if="tools.img">
  <div class="card-body">
    <h5 class="card-title">{{tools.title}}</h5>
    <p class="card-text" v-if="subtitle">{{tools.subtitle}}</p>
    <router-link class="btn btn-outline-primary" :to="'/tools/' + tools.id">
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
