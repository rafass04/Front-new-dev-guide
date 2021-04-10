<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <Header class="mb-4"/>
      </div>
      <div class="row">
        <div class="col">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
