<template>
  <div>
    <button
      :class="{ 'hide': isFavourited}"
      @click="addToFavourites"
    >
      <img
        src="../assets/icons/unfavourited.png"
        alt="Select light mode"
        width="30"
        height="30"
      >
    </button>
    <button
      :class="{ 'hide': !isFavourited }"
      @click="removeFromFavourites"
    >
      <img
        src="../assets/icons/favourited.png"
        alt="Select dark mode"
        width="30"
        height="30"
      >
    </button>
  </div>
</template>
  
<script setup>
  import { useFavouritesStore } from '../store/favourites'
  import { defineProps, onMounted, ref } from "vue";
  import { storeToRefs } from 'pinia'

  const { list } = storeToRefs(useFavouritesStore())

  const props = defineProps({
    id: {
      type: String,
      required: true
    }
  })

  let isFavourited = ref(false)

  const checkIfFavourited = () => {
    isFavourited.value = list.value.some(movesInFavouritesList => movesInFavouritesList == props.id)
  }

  const addToFavourites = () => {
    isFavourited.value = true
    list.value.push(props.id)
  }
  
  const removeFromFavourites = () => {
    isFavourited.value = false
    var index = list.value.map(function(x) { return x; }).indexOf(props.id); 
    list.value.splice(index, 1);
  }

  onMounted (() => {
    checkIfFavourited()
  })

</script>
  
<style scoped>
  button{
    border: none;
    background-color: var(--background-color-secondary);
  }
</style>
  