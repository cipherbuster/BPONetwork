<template>
  <div id="app">

    <div class="container grid-lg" >>
        <router-view name="heading"></router-view>
    </div>

    <div class="container grid-lg">
        <router-view></router-view>
    </div>

    <div class="container grid-lg">

      <footer>
          <p>Copyright &copy; {{ (new Date()).getFullYear() }}.</p>
      </footer>

    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
