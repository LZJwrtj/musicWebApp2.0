<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from 'components/header/header.vue'
import Tab from 'components/tab/tab.vue'
export default {
  components: {
    'v-header': Header,
    'v-tab': Tab
  }
}
</script>

<style>
#app {
}
</style>
