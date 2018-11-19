<template>
    <div class="container">
        <vc-header></vc-header>
        <hr>
        <server-view></server-view>
        <hr>
        <server-manager></server-manager>
    </div>
</template>

<script>
  import ServerView from './comps/ServerView.vue';
  import ServerManager from './comps/ServerManager.vue';
  export default {
    components: {
      ServerView,
      ServerManager
    }
  }
</script>

<style>

</style>
