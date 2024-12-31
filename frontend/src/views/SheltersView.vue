<script>
import { mapActions } from 'vuex'

// @ is an alias to /src

export default {
  name: 'SheltersView',
  data () {
    return {
      shelters: [],
      isLoading: true
    }
  },
  async mounted () {
    this.shelters = await this.fetchShelters()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchShelters'])
  }
}
</script>

<template lang="pug">
  .homeView
  h1 shelters
  p(v-if="isLoading") Loading...
  p(v-else) There are {{shelters.length}} shelters registered in the system.

  ol
    li(v-for="shelter in shelters")
        a(:href="`shelters/${shelter._id}`") {{shelter.name}}

</template>
