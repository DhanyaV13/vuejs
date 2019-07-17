<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <bottom-bar></bottom-bar>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Header from '@/components/TheHeader.vue'
  import Footer from '@/components/TheFooter.vue'

  @Component({
    components:{
      'nav-bar': Header,
      'bottom-bar': Footer
      }
  })
  export default class App extends Vue {
    title = "Vue Books";
    
  }
</script>

<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  height: auto;
  width : auto;
}

h1 {
  text-align: center;
}

</style>