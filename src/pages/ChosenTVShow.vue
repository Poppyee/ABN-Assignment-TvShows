<template>
  <div
    class="container-center background"
    :style="{ backgroundImage: `url(${image})`}"
  >
    <div class="card margin">
      <h1 class="title">
        {{ name }}
        <favourite-button :id="id" />
      </h1>
      <div class="flex-column">    
        <div>
          <img
            :src="image"
            width="200"
            height="300"
          >
        </div>
        <div>
          <p> 
            Genre: {{ genre }}
          </p>
          <div>
            <img
              style="vertical-align: middle; padding: 5px"
              src="../assets/icons/rating.png"
              alt="Select dark mode"
              width="25"
              height="25"
            >
            <span style="vertical-align: middle">Rating: {{ rating }}</span>
          </div>
          <p>
            Language: {{ language }}
          </p>
          <p>
            Average run time: {{ averageRunTime }} minutes
          </p>
          <p>
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import axios from 'axios'
  import FavouriteButton from '@/components/FavouriteButton.vue'
  import { defineProps, ref, onMounted } from 'vue';

  const props = defineProps({
    id: {
      type: String,
      required: true
    }
  })

  const name = ref('')
  const image = ref('')
  const genre = ref('')
  const rating = ref('')
  const description = ref('')
  const averageRunTime = ref('')
  const language = ref('')

  const  getChosenTvShowDetails = (id) => {
    axios
      .get('https://api.tvmaze.com/shows/' + id)
      .then(response => {
        parseData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const parseData = (data) => {
    name.value = data.name
    image.value = data.image.medium
    genre.value = data.genres.length > 1 ? data.genres.toString().replace(/[[\]]/g,'') : 'Unknown'
    rating.value = data.rating.average || 'Unknown'
    description.value = removeTags(data.summary)
    averageRunTime.value = data.averageRuntime
    language.value = data.language
  }

  const  removeTags = (str) =>  {
    if ((str===null) || (str===''))
        return 'No Description';
    else
        str = str.toString();
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
  }

  onMounted (() => {
    getChosenTvShowDetails(props.id)
  })

  
</script>

<style scoped>

.background {
  background-position: top;
  box-shadow: inset 0 0 0 2000px var(--rgb-background);
}
.margin {
  margin-top: 130px;
  overflow-y: scroll;
}
.title {
  flex-direction: row;
  display: flex;
  justify-content: center
}

.flex-column {
  flex-direction: row;
  display: column;
}

</style>
