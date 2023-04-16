<template>
  <navigation-bar />
  <router-view />
</template>

<script setup>
import NavigationBar from './components/Navigation.vue'
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
