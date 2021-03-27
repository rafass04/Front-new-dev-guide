<template>
<div class="d-flex justify-content-center">
  <div class="card w-75 shadow">
    <img class="card-img-top" :src="img" :alt="title" v-if="img">
    <div class="card-body">
      <h1 class="card-title">{{title}}</h1>
      <p class="lead" v-if="subtitle">{{subtitle}}</p>
      <hr/>
      <div v-html="article"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Diferença entre Machine Learning e Inteligência Artificial',
      subtitle: null,
      article: 'Diferenças do futuro <b>qualquer coisa</b>',
      img: null,
    };
  },
};

</script>
