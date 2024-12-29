<script>
import { mapActions } from 'vuex'

export default {
  name: 'ClientView',
  data () {
    return {
      client: {},
      isLoading: true
    }
  },
  async mounted () {
    this.client = await this.fetchClient(this.$route.params.clientId)
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchClient'])
  }
}
</script>

<template lang="pug">
    .client
        p(v-if="isLoading") Loading...
        p(v-else)
            h1 Client Details
            p {{client.name}}
            p {{client.age}}
            p pets: {{client.reservationList}}
</template>
