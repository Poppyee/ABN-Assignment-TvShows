<template>
  <div class="container-center background">
    <div class="card border-color">
      <h1>Favourite Shows</h1>
      <div
        v-if="chosenShow.length > 0"
        class="alignment"
      >
        <div
          v-for="movie in chosenShow"
          :key="movie.id"
          class="tvCard"
        >
          <favourite-button :id="movie.id" />
          <router-link :to="'/chosenTVShow/'+ movie.id">
            <img
              :src="movie.image"
              :alt="movie.name"
              width="200"
              height="300"
            >
            <p>
              {{ movie.name }}
            </p>
          </router-link>
        </div>
      </div>
      <div v-else>
        <img
          src="../assets/icons/noFavourites.png"
          alt="Click the heart of a show to favourite it"
          width="200"
          height="200"
        >
        <p>You currently have no shows favourited</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFavouritesStore } from '../store/favourites'
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import FavouriteButton from '@/components/FavouriteButton.vue'
import { storeToRefs } from 'pinia'

const { list } = storeToRefs(useFavouritesStore())
const chosenShow = ref([])

const getChosenTvShowDetails = (id) => {
    axios
      .get('https://api.tvmaze.com/shows/' + id)
      .then(response => {
        chosenShow.value.push({ id: id, image: response.data.image.medium, name: response.data.name})
      })
      .catch(error => {
        console.log(error)
      })
  }

watch(list.value, () => {
  chosenShow.value = []
  list.value.forEach(showId => getChosenTvShowDetails(showId));
});


onMounted(() => {
  list.value.forEach(showId => getChosenTvShowDetails(showId));
})

</script>

<style scoped>

.background {
  background-image: url('../assets/backgrounds/heartBackground.png');
  padding-top: 130px;
}

.border-color {
  border: 1px solid lightpink;
}

.tvCard {
  text-align: center;
  margin: 10px;
}

.alignment {
  flex-direction: row;
  overflow-x: scroll;
  display: flex;
  -webkit-overflow-scrolling: auto;
}
</style>
