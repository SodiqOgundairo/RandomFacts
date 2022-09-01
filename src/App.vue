<template>
  <div>

  <router-view/>
  <!-- <HomeView/> -->
  </div>
</template>

<script>
// import HomeView from './views/HomeView.vue';

export default {
  name: "App",

  // components: { HomeView },

  methods: {
    test(){
      console.log('LOGIN')
    }
  }
};
</script>

<style>
body{
  overflow-x: hidden;
}
</style>
