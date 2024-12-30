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
    ...mapActions(['fetchShelter'])
  }
}
</script>

<template lang="pug">
  .shelter
    p(v-if="isLoading") Loading...
    p(v-else)
    h1 Shelter Details
    p shelter name: {{shelter.name}}
    p shelter total animal capacity: {{shelter.animalCapacity}}
    h2 shelter contact info:
    p(v-if="shelter.contactInfo")
        p shelter phone: {{shelter.contactInfo.phone}}
        p shelter email: {{shelter.contactInfo.email}}
        p shelter location: {{shelter.contactInfo.location}}
    h2 shelter animals:
    ol
        li(v-for="animal in shelter.animalList")
            ul
                li breed: {{animal.breed}}
                li age: {{animal.age}}
                li injuries: {{animal.injuries}}
    h2 shelter reservations:
    ol
        li(v-for="reservation in shelter.reservationList")
            ul
                li client:
                a(:href="`/clients/${reservation.client}`") {{reservation.client}}
</template>
