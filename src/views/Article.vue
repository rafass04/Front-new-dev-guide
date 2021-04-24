<template>
<div class="d-flex justify-content-center">
  <div class="card w-75 shadow">
    <img class="card-img-top" :src="img" :alt="title" v-if="img">
    <div class="card-body" v-if="loading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="card-body" v-else-if="failed">
      <p class="text-danger">Ocorreu uma falha ao obter o artigo. Tente Novamente!</p>
    </div>
    <div class="card-body" v-else>
      <h1 class="card-title">{{title}}</h1>
      <p class="lead" v-if="subtitle">{{subtitle}}</p>
      <hr/>
      <div v-html="article"></div>
    </div>
  </div>
</div>
</template>

<script>
import Artigos from '../app/Artigos';

let instance;

export default {
  data() {
    return {
      failed: false,
      loading: true,
      title: null,
      subtitle: null,
      article: null,
      img: null,
    };
  },
  async mounted() {
    instance = new Artigos();
    const article = await instance.article(this.$route.params.id);
    console.log(article);
    if (article) {
      this.loading = false;
      this.title = article.title;
      this.subtitle = article.subtitle;
      this.article = article.article;
      this.img = article.img;
    } else {
      this.failed = true;
    }
  },
};

</script>
