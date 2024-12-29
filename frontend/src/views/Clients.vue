<script>
import { mapActions } from 'vuex'

// @ is an alias to /src

export default {
  name: 'Clients',
  data () {
    return {
      clients: [],
      isLoading: true
    }
  },
  async mounted () {
    this.clients = await this.fetchClients()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchClients'])
  }
}
</script>

<template lang="pug">
  .homeView
  h1 Clients
  p(v-if="isLoading") Loading...
  p(v-else) There are {{clients.length}} clients registered in the system.

  ol
      li(v-for="client in clients")
          a(:href="`clients/${client._id}`") {{client.name}}

</template>
