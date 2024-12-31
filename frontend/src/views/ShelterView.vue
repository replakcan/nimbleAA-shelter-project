<script>
import { mapActions } from 'vuex'

export default {
  name: 'ShelterView',
  data () {
    return {
      shelter: {},
      isLoading: true
    }
  },
  async mounted () {
    this.shelter = await this.fetchShelter(this.$route.params.shelterId)
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchShelter']),
    showAnimals () {
      this.$router.push(`/shelters/${this.$route.params.shelterId}/animal-list`)
    }
  }
}
</script>

<template lang="pug">
  .shelter
    p(v-if="isLoading") Loading...
    p(v-else)
    h1 Shelter Details
    p name: {{shelter.name}}
    p total animal capacity: {{shelter.animalCapacity}}
    h2 contact info:
    p(v-if="shelter.contactInfo")
        p phone: {{shelter.contactInfo.phone}}
        p email: {{shelter.contactInfo.email}}
        p location: {{shelter.contactInfo.location}}
    button(@click="showAnimals()") Click to see shelter animals
    h2 reservations:
    ol
        li(v-for="reservation in shelter.reservationList")
            ul
                li client:
                a(:href="`/clients/${reservation.client}`") {{reservation.client}}
</template>
