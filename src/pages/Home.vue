<template>
  <div class="container-center background">
    <input 
      id="myInput"
      v-model="inputValue" 
      type="text"
      placeholder="Search Shows"
      title="Type in a meal"
      @keyup="search(inputValue)"
      @keydown="onFocusIn"
    >
    <div
      id="cardContainer"
      class="card border-color"
    >
      <h1>Today's Schedule</h1>
      <div style="flex-direction: row; overflow-x: scroll; display: flex; -webkit-overflow-scrolling: auto;">
        <div
          v-for="result in todaysShows"
          :key="result.id"
          class="tvCard"
        >
          <router-link :to="'/chosenTVShow/'+ result.show.id">
            <p>
              {{ result.airtime }}         
            </p>
            <img
              :src="result.show.image.medium"
              :alt="result.name"
              width="200"
              height="300"
            >
            <p>
              {{ result.name }}
              {{ result.show.genre }}
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
          v-for="result in searchResults"
          :key="result.show.id"
          class="tvCard"
        >
          <router-link :to="'/chosenTVShow/'+ result.show.id">
            <div v-if="result.show.image">
              <img
                :src="result.show.image.medium"
                :alt="result.show.name"
                width="200"
                height="300"
              >
            </div>
            <div v-else>
              <img
                src="../assets/icons/missing.png"
                :alt="result.show.name"
                width="200"
                height="300"
              >
            </div>
            <p>
              {{ result.show.name }}
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

  const todaysShows =  ref([])
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
        todaysShows.value = response.data
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
