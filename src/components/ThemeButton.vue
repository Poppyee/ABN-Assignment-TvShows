<template>
  <div>
    <button
      :class="{ 'hide': userTheme != 'dark-theme' }"
      @click="toggleTheme"
    >
      <img
        src="../assets/icons/lightMode.png"
        alt="Select light mode"
        width="50"
        height="50"
      >
    </button>
    <button
      :class="{ 'hide': userTheme === 'dark-theme' }"
      @click="toggleTheme"
    >
      <img
        src="../assets/icons/darkMode.png"
        alt="Select dark mode"
        width="50"
        height="50"
      >
    </button>
  </div>
</template>
  
<script setup>
  import { ref, onMounted } from "vue"

  const userTheme = ref("light-theme")

  const toggleTheme = () => {
    const activeTheme = localStorage.getItem("user-theme");
    if (activeTheme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }

  const getTheme = () => {
    return localStorage.getItem("user-theme");
  }

  const setTheme = (theme) => {
    localStorage.setItem("user-theme", theme);
    userTheme.value = theme;
    document.documentElement.className = theme;
  }

  onMounted(() => {
    const initUserTheme = getTheme() || "dark-theme";
    setTheme(initUserTheme);
  })

  </script>
  
<style scoped>
  button{
    border: none;
    background-color: var(--background-color-primary);
  }
  
</style>
  