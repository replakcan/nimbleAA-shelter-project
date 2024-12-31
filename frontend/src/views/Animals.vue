<script>
import { mapActions } from 'vuex'

export default {
  name: 'Animals',
  data () {
    return {
      animals: [],
      isLoading: true,
      userId: ''
    }
  },
  async mounted () {
    this.animals = await this.fetchAnimals(this.$route.params.shelterId)
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchAnimals', 'adoptAnimal'])
  }
}
</script>

<template lang="pug">
    .animals
    h1 Animals
    p(v-if="isLoading") Loading...
    p(v-else) There are {{animals.length}} animals in the shelter.
    ol
        li(v-for="animal in animals")
            ul
                li breed: {{animal.breed}}
                li age: {{animal.age}}
                li injuries: {{animal.injuries}}
                button(@click="adoptAnimal({ clientId: userId, animalId: animal._id })") Adopt animal(please type your id to confirm)
                input(v-model="userId")
</template>
