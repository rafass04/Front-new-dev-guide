<template>
  <div id="app">
    <Header class="mb-4"/>
    <router-view/>
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
