<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->
    <v-player></v-player>
  </div>
</template>

<script>
import Header from 'components/header/header.vue'
import Tab from 'components/tab/tab.vue'
import Player from 'components/player/player.vue'
export default {
  components: {
    'v-header': Header,
    'v-tab': Tab,
    'v-player': Player
  }
}
</script>

<style>
#app {
}
</style>
