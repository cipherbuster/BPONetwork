<template>

  <header class="navbar">

    <section class="navbar-section">
      <router-link to="/" class="btn btn-link" active-class="text-bold" exact>Home</router-link>
      <router-link to="/task" class="btn btn-link" active-class="text-bold">Lista szczegółów</router-link>
      <router-link to="/list" class="btn btn-link" active-class="text-bold">Powrót do listy zadań</router-link>
    </section>

  </header>

</template>

<script>
  export default {
    name: 'headingDescription'
  }
</script>
