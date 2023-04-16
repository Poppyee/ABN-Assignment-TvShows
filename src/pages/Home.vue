<template>
  <div class="container-center background">
    <input 
      id="myInput"
      v-model="inputValue" 
      type="text"
      placeholder="Search Meals"
      title="Type in a meal"
      @keyup="search(inputValue)"
      @keydown="onFocusIn"
    >
    <div
      id="cardContainer"
      class="card border-color"
    >
      <h1>Todays Schedule</h1>
      <div style="flex-direction: row; overflow-x: scroll; display: flex; -webkit-overflow-scrolling: auto;">
        <div
          v-for="movie in topMovies"
          :key="movie.id"
          class="tvCard"
        >
          <router-link :to="'/chosenTVShow/'+ movie.show.id">
            <p>
              {{ movie.airtime }}         
            </p>
            <img
              :src="movie.show.image.medium"
              :alt="movie.name"
              width="200"
              height="300"
            >
            <p>
              {{ movie.name }}
              {{ movie.show.genre }}
            </p>
          </router-link>
        </div>
      </div>
    </div>


    <div
      v-if="showSearchResults"
      class="searchResults"
    >
      <div style="flex-direction: row; overflow-x: scroll; display: flex; -webkit-overflow-scrolling: auto;">
        <div
          v-for="movie in searchResults"
          :key="movie.show.id"
          class="tvCard"
        >
          <router-link :to="'/chosenTVShow/'+ movie.show.id">
            <div v-if="movie.show.image">
              <img
                :src="movie.show.image.medium"
                :alt="movie.show.name"
                width="200"
                height="300"
              >
            </div>
            <div v-else>
              <img
                src="../assets/icons/missing.png"
                :alt="movie.show.name"
                width="200"
                height="300"
              >
            </div>
            <p>
              {{ movie.show.name }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios'
  import { onMounted, ref } from 'vue'

  const topMovies =  ref([])
  const inputValue = ''
  const searchResults = ref([])
  const showSearchResults = ref(false)

  const search = (input) => {
    if (input.length > 0) {
      axios
        .get('https://api.tvmaze.com/search/shows?q=' + input)
        .then(response => {
          searchResults.value = response.data
          showSearchResults.value = true
        })
        .catch((error) => {
          console.log(error)
          showSearchResults.value = false
        })
    } else {
      onFocusOut()
      showSearchResults.value = false
    }
  }
  const getTodaysScheduleNL = () => {
    axios
      .get('https://api.tvmaze.com/schedule?country=US')
      .then(response => {
        topMovies.value = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
  const onFocusIn = () => {
      document.getElementById('cardContainer').setAttribute('class', 'hide');
  }

  const onFocusOut = () => {
    document.getElementById('cardContainer').setAttribute('class', 'card');
  }

  onMounted (() => {
      getTodaysScheduleNL()
  })

</script>

<style scoped>
.background {
  background-image: url('../assets/backgrounds/starBackground.png');
}
.border-color {
  border: 1px solid rgb(155, 132, 2);
}

.searchResults {
  padding: 2rem 1rem;
  height: 40%;
  text-align: center;
  border: 1px solid rgb(155, 132, 2);
  border-radius: 4px;
  background-color: var(--background-color-secondary);
  width: 90%;
}

.tvCard {
  text-align: center;
  margin: 10px;
}
a:link { text-decoration: none; }

input {
    border-radius: 30px;
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: var(--background-color-secondary);
    font-size: 1rem;
    width: 50%;
    height: 50px;
    text-align: center;
    color: var(--text-primary-color);
    border: 1px solid rgb(155, 132, 2);
}
</style>
