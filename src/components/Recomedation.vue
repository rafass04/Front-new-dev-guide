<template>
<div class="d-flex justify-content-center" style="width: 18rem;">
  <img class="card-img-top" :src="recomedation.img" 
  :alt="recomedation.title" v-if="recomedation.img">
  <div class="card-body">
    <h5 class="card-title">{{recomedation.title}}</h5>
    <p class="card-text" v-if="subtitle">{{recomedation.subtitle}}</p>
    <router-link class="btn btn-outline-primary" :to="'/recomedation/' + recomedation.id">
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
