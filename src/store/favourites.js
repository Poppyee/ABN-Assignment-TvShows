import { defineStore } from 'pinia'

export const useFavouritesStore = defineStore('favourites', {
  state: () => {
    return { list: [] }
  },
})