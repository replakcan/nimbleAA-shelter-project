<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'AboutView',
  components: {
    HelloWorld
  }
}
</script>

<template lang="pug">
h1.aboutView
h1 This is an about page
HelloWorld(msg="the zamazingo spiderman")
</template>
