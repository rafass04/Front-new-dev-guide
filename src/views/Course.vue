<template>
<div class="d-flex justify-content-center">
  <div class="card w-75 shadow">
    <img class="card-img-top" :src="img" :alt="title" v-if="img">
    <div class="card-body">
      <h1 class="card-title">{{title}} - {{author}}</h1>
      <hr/>
      <div>Descrição do curso</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Curso1',
      author: 'Joaozinho',
    };
  },
};

</script>
