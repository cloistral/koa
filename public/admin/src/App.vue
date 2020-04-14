<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$message);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
