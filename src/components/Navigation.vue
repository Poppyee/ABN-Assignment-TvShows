<template>
  <div class="nav-container">
    <div>
      <router-link to="/favouriteShow">
        <img
          src="../assets/icons/favourite.png"
          alt="Favourites"
          width="50"
          height="50"
        >
      </router-link>
    </div>
    <div>
      <router-link to="/home">
        <img
          src="../assets/icons/home.png"
          alt="Favourites"
          width="50"
          height="50"
        >
      </router-link>
    </div>
    <theme-button />
  </div>
</template>

<script setup>
import ThemeButton from "@/components/ThemeButton.vue";
</script>

<style scoped>
.nav-container {
  width: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
  color: var(--text-primary-color);
  background-color: var(--background-color-primary);
  border-bottom: 2px solid var(--background-color-secondary);
}
</style>
