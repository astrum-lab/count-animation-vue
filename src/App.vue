<template>
  <div class="content">
    <CountAnimation :start="1000" :value="7777" :duration="2000" />
  </div>
</template>

<script setup>
import CountAnimation from './components/CountAnimation/CountAnimation.vue';
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    background: #F2F2F2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content {
  margin: 0 auto;
  width: 100%;
  max-width: 100px;
  padding: 15px 10px;
  background: #FFF;
  color: black;
  border-radius: 10px;
  font-size: 25px;
  font-weight: bold;
    box-shadow: 0 0 10px rgba(204, 204, 204, 0.1),
    0 0 30px rgba(204, 204, 204, 0.3),
    0 0 50px rgba(204, 204, 204, 5);
}
</style>
