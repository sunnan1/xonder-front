<template>
  <div>
    <TopNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import TopNavbar from '../src/views/layout/admin/TopNavbar.vue';
export default {
  components:{
    TopNavbar
  }
};
</script>

<style>

</style>
