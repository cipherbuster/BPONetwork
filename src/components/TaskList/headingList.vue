<template>

  <header class="navbar">

    <section class="navbar-section">
      <router-link to="/" class="btn btn-link" active-class="text-bold" exact>Home</router-link>
      <router-link to="/list" class="btn btn-link" active-class="text-bold">Lista zadań</router-link>
    </section>

  </header>

</template>

<script>
  export default {
    name: 'headingList'
  }
</script>
