<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="New Dev Guide">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="item in menu" :key="item.link">
            <router-link class="nav-link" :to="'/' + item.link">{{item.title}}</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Pesquise algo aqui" aria-label="Pesquisa">
          <button class="btn btn-outline-primary" type="submit">Pesquisar</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  img {
    height: 3rem;
  }
</style>

<script>
export default {
  data: () => ({
    menu: [
      {
        title: 'Nosso propósito',
        link: 'proposito',
      },
      {
        title: 'Guia iniciante',
        link: 'guia-iniciante',
      },
      {
        title: 'Cursos',
        link: 'cursos-iniciantes',
      },
      {
        title: 'Carreira',
        link: 'carreira',
      },
      {
        title: 'Perfil',
        link: 'perfil',
      },
    ]
  }),
}
</script>